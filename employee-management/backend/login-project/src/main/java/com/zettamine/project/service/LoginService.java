package com.zettamine.project.service;

import java.util.Optional;

import com.zettamine.project.dto.UserDto;
import com.zettamine.project.entities.User;

public interface LoginService {
	void saveUser(UserDto userDto);
	 Optional<User> getUserByEmail(String email);
	 UserDto verifyLoginDetails(UserDto userDto);
	void verifyEmail(String email);

}
