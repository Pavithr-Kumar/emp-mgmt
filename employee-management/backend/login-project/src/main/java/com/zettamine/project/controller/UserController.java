package com.zettamine.project.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.zettamine.project.dto.ResponseDto;
import com.zettamine.project.dto.UserDto;
import com.zettamine.project.service.impl.LoginServiceImpl;
import com.zettamine.project.service.impl.UserServiceImpl;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@CrossOrigin
public class UserController {
	private LoginServiceImpl loginService;
	private UserServiceImpl userService;
	
	@PostMapping("/signup")
	public ResponseEntity<ResponseDto> handleSignUp(@RequestBody UserDto userDto) {
		
		loginService.saveUser(userDto);
		return  ResponseEntity.status(HttpStatus.CREATED)
				              .body(new ResponseDto());
	}
	
	@PostMapping("/login")
	public ResponseEntity<UserDto> handleLogin(@RequestBody UserDto userDto) {
		//System.err.println(userDto);
		return  ResponseEntity.status(HttpStatus.OK)
				.body(loginService.verifyLoginDetails(userDto));
	}
	
	@PostMapping("/update-password")
	public ResponseEntity<UserDto> handleUpdatePassowrd(@RequestBody UserDto userDto) {
		
		return  ResponseEntity.status(HttpStatus.OK)
				.body(loginService.updatePassword(userDto));
	}
	
	
	@GetMapping("/login/{email}")
	public ResponseEntity<ResponseDto> verifyLogin(@PathVariable  String email) {
		loginService.verifyEmail(email);
		return  ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseDto());
	}
	
	
	@GetMapping("/login/forgot-pass/{email}")
	public ResponseEntity<ResponseDto> handleUpdatePassword(@PathVariable String email) {
		loginService.forgotPassword(email);
		return ResponseEntity.status(HttpStatus.OK)
				     .body(new ResponseDto());
				         
	}
	
	
	@GetMapping("/employees")
	public ResponseEntity<?> getAllEmployees() {
		
		return ResponseEntity.status(HttpStatus.OK)
				.body(userService.getAllEmployees());
		
	}
	
	
	@GetMapping("/employee/{id}")
	public ResponseEntity<?> getEmployeeById(@PathVariable Integer id) {
		
		return ResponseEntity.status(HttpStatus.OK)
				.body(userService.getEmployeeById(id).get());
		
	}
	
	@PostMapping("/employee/save")
	public ResponseEntity<?> saveEmployeeByAdmin(@RequestBody UserDto userDto) {
		userService.saveEmployee(userDto);
		return  ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseDto());
				
		
	}
	
	@DeleteMapping("/employee/delete/{id}")
	public ResponseEntity<?> deleteEmployeeByAdmin(@PathVariable Integer id){
		userService.deleteUser(id);
		return  ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseDto());
		
	}
	
	
	@PutMapping("/employee/update")
	public ResponseEntity<?> updateEmployeeByAdmin(@RequestBody UserDto userDto){
		userService.updateEmployee(userDto);
		return  ResponseEntity.status(HttpStatus.OK)
				.body(new ResponseDto());
		
	}
	
	
	
	

}
