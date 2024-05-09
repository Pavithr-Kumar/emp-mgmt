package com.zettamine.project.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.zettamine.project.dto.UserDto;
import com.zettamine.project.entities.User;
import com.zettamine.project.exception.DuplicateException;
import com.zettamine.project.mapper.UserMapper;
import com.zettamine.project.respository.UserRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl {
	private UserRepository userRepository;
	private LoginServiceImpl loginService;
	
	public List<UserDto> getAllEmployees(){
		return userRepository.findAll().stream()
				                               .map(emp->UserMapper.mapToUserDto(emp))
				                               .toList();
	}
	
	public Optional<User> getEmployeeById(Integer id){
		return userRepository.findById(id);
	}

	public void saveEmployee(UserDto userDto) {
		User user = UserMapper.mapToUser(userDto);
		
		user.setPassword(userDto.getPassword());
		user.setAccountLock(false);
		user.setAttempts(0);
		user.setLoginStatus(0);
		System.err.println(user);
		userRepository.save(user);
		
		
	}
   public void deleteUser(Integer id) {
		
		userRepository.deleteById(id);
	}
   
   public void updateEmployee(UserDto userDto) {
	   User user=userRepository.findByEmail(userDto.getEmail()).get();
	   user.setFirstName(userDto.getFirstName());
	   user.setLastName(userDto.getLastName());
	   user.setRoleId(userDto.getRoleId());
	   System.err.println(user);
	   userRepository.save(user);
   }

}
