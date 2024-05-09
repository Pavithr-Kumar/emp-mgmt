package com.zettamine.project.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import com.zettamine.project.dto.ErrorResponseDto;

@RestControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(value =DuplicateException.class)

	public ResponseEntity<ErrorResponseDto> handleDuplicationException(Exception ex, WebRequest webRequest) {
		ErrorResponseDto error = new ErrorResponseDto();

		error.setApiPath(webRequest.getDescription(false));
		error.setErrorCode(HttpStatus.CONFLICT);
		error.setErrorMessage(ex.getMessage());
		

		return new ResponseEntity<ErrorResponseDto>(error, HttpStatus.CONFLICT);
	}
	
	@ExceptionHandler(value =NotFoundException.class)
	
	public ResponseEntity<ErrorResponseDto> handleNotFoundException(Exception ex, WebRequest webRequest) {
		ErrorResponseDto error = new ErrorResponseDto();
		
		error.setApiPath(webRequest.getDescription(false));
		error.setErrorCode(HttpStatus.NOT_FOUND);
		error.setErrorMessage(ex.getMessage());
		
		
		return new ResponseEntity<ErrorResponseDto>(error, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(value =InvaliDetailsException.class)
	
	public ResponseEntity<ErrorResponseDto> handlInvalidDetailsException(Exception ex, WebRequest webRequest) {
		ErrorResponseDto error = new ErrorResponseDto();
		
		error.setApiPath(webRequest.getDescription(false));
		error.setErrorCode(HttpStatus.BAD_REQUEST);
		error.setErrorMessage(ex.getMessage());
		//System.err.println(error);
		
		return new ResponseEntity<ErrorResponseDto>(error, HttpStatus.BAD_REQUEST);
	}
	
	@ExceptionHandler(value =NoAttemptsLeftException.class)
	
	public ResponseEntity<ErrorResponseDto> handlNoAttemptsException(Exception ex, WebRequest webRequest) {
		ErrorResponseDto error = new ErrorResponseDto();
		
		error.setApiPath(webRequest.getDescription(false));
		error.setErrorCode(HttpStatus.LOCKED);
		error.setErrorMessage(ex.getMessage());
		
		
		return new ResponseEntity<ErrorResponseDto>(error, HttpStatus.LOCKED);
	}

}
