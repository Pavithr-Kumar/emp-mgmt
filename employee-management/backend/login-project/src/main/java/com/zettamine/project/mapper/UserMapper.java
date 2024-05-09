package com.zettamine.project.mapper;

import com.zettamine.project.dto.UserDto;
import com.zettamine.project.entities.User;

public class UserMapper {
	public static User mapToUser(UserDto dto) {
		User user = new User();
		user.setEmail(dto.getEmail());
		user.setFirstName(dto.getFirstName());
		user.setLastName(dto.getLastName());
		user.setRoleId(dto.getRoleId());
		return user;
	}
	
	public static UserDto mapToUserDto(User user) {
		UserDto dto = new UserDto();
		dto.setEmpId(user.getUserId());
		dto.setAccountLock(user.getAccountLock());
		dto.setAttempts(user.getAttempts());
		dto.setEmail(user.getEmail());
		dto.setFirstName(user.getFirstName());
		dto.setLastName(user.getLastName());
		dto.setLoginStatus(user.getLoginStatus());
//		dto.setPassword(user.getPassword());
		dto.setRoleId(user.getRoleId());
//		dto.setTempPwd(dto.getTempPwd());
		
		return dto;
	}

}
