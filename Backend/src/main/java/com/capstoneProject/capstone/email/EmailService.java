package com.capstoneProject.capstone.email;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmailService implements EmailSender {

    private final static Logger Logger = LoggerFactory.getLogger(EmailService.class);
    @Autowired
    private final JavaMailSender mailSender;

    @Override
    @Async
    public void send(String to, String email) {
        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper =
                    new MimeMessageHelper(mimeMessage, "utf-8");
            helper.setText(email, true);
            helper.setTo(to);
            helper.setSubject("Confirm your email");
            helper.setFrom("registrationteam0@fundingforce.com");
            mailSender.send(mimeMessage);
        }catch (MessagingException e){
            Logger.error("Failed to send email", e);
            throw new IllegalStateException("Failed to send email");
        }

    }
}
