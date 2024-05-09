package com.zettamine.project.dto;

import lombok.Data;

@Data
public class UserDto {
	private Integer empId;
	private String firstName;
	private String lastName;
	private String email;
	private String password;
	private String tempPwd;
	private Integer roleId;
	private Integer loginStatus;	
	private Boolean accountLock;
	private Integer attempts;
	
	

}
