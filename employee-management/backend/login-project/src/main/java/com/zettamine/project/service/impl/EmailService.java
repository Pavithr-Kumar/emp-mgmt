package com.zettamine.project.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {
	 @Autowired
	    private JavaMailSender emailSender;

	    @Autowired
	    private TemplateEngine templateEngine;

	    @Autowired
	    private Environment env;

	    public void sendHtmlMessage(String to, String subject, String templateName, Context context) {
	        MimeMessage message = emailSender.createMimeMessage();
	        try {
	            MimeMessageHelper helper = new MimeMessageHelper(message, true);
	            helper.setTo(to);
	            helper.setSubject(subject);
	            String htmlContent = templateEngine.process(templateName, context);
	            helper.setText(htmlContent, true);
	            emailSender.send(message);
	        } catch (MessagingException e) {
	            e.printStackTrace();
	            
	        }
	    }

}
