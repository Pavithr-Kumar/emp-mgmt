package com.zettamine.project.dto;

import org.springframework.http.HttpStatus;

import lombok.Data;

@Data
public class ErrorResponseDto {
	private String apiPath;
	private HttpStatus errorCode;
	private String errorMessage;

}
