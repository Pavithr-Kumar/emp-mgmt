package com.zettamine.project.service.impl;

import java.util.Optional;

import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;

import com.zettamine.project.dto.UserDto;
import com.zettamine.project.entities.User;
import com.zettamine.project.exception.DuplicateException;
import com.zettamine.project.exception.InvaliDetailsException;
import com.zettamine.project.exception.NoAttemptsLeftException;
import com.zettamine.project.exception.NotFoundException;
import com.zettamine.project.mapper.UserMapper;
import com.zettamine.project.respository.UserRepository;
import com.zettamine.project.service.LoginService;
import com.zettamine.project.util.LoginUtil;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LoginServiceImpl implements LoginService {

	private UserRepository userRepository;
	private EmailService emailService;
	@Override
	public void saveUser(UserDto userDto) {
		if(getUserByEmail(userDto.getEmail()).isPresent())
			throw new DuplicateException("User Already Exists with email: "+ userDto.getEmail());
		
		User user= UserMapper.mapToUser(userDto);
		String tempPass=LoginUtil.generatePassayPassword();
		user.setPassword(tempPass);
		user.setLoginStatus(0);
		user.setAttempts(0);
		user.setAccountLock(false);
	    Context context = new Context();
        context.setVariable("title", "Hello "+user.getFirstName());
        context.setVariable("subtitle", "Here is your temporary password ");
        context.setVariable("password", tempPass);
        emailService.sendHtmlMessage(user.getEmail(), "Here is your temporary password", "email-template", context);
        userRepository.save(user);
		
	}

	@Override
	public Optional<User> getUserByEmail(String email) {
		
		return userRepository.findByEmail(email);
	}
	
	
	public void verifyEmail(String email) {
		if(getUserByEmail(email).isEmpty())
			throw new NotFoundException("No Users Found with email Id :"+email);
	}
	
	
	public UserDto verifyLoginDetails(UserDto userDto) {
		//System.err.println(userDto);
		User user = getUserByEmail(userDto.getEmail()).get();
		user.setLoginStatus(1);
		if(user.getAccountLock()) {
			
			throw new NoAttemptsLeftException("");
		}
		
		if(!user.getAccountLock() && userDto.getAttempts()==5) {
			user.setAttempts(userDto.getAttempts());
			user.setAccountLock(true);
			userRepository.save(user);
			throw new NoAttemptsLeftException("");
		}
		
		
		if(!user.getAccountLock() && user.getLoginStatus().equals(0) )
			
		 {
			if(!userDto.getPassword().equals(user.getPassword())) {
				user.setAttempts(userDto.getAttempts());
				userRepository.save(user);
				throw new InvaliDetailsException(user.getAttempts().toString());
			}
			
		}else if(!user.getAccountLock() && user.getLoginStatus().equals(1)) {
                 if(!userDto.getPassword().equals(user.getPassword())) {
                	 user.setAttempts(userDto.getAttempts());
                	 userRepository.save(user);
				throw new InvaliDetailsException(user.getAttempts().toString());
			}
			
		}
		
		
		
		
		
		
			
		return UserMapper.mapToUserDto(userRepository.save(user));
	
	}
	
	public UserDto updatePassword(UserDto userDto) {
		
		User user = getUserByEmail(userDto.getEmail()).get();
		user.setLoginStatus(1);
		user.setPassword(userDto.getPassword());
		user.setTempPwd(null);
		userRepository.save(user);
		
		return UserMapper.mapToUserDto(user);
		 
		
	}
	
	public void forgotPassword(String email) {
		User user = getUserByEmail(email).get();
		String pass=LoginUtil.generatePassayPassword();
		user.setPassword(pass);
		 Context context = new Context();
	        context.setVariable("title", "Hello "+user.getFirstName());
	        context.setVariable("subtitle", "Here is your temporary password ");
	        context.setVariable("password", pass);
	        emailService.sendHtmlMessage(user.getEmail(), "Here is your temporary password", "email-template", context);
		userRepository.save(user);
		
		
	
	}
	
	
}
