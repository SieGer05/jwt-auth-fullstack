package ma.sieger.backend.config;

import ma.sieger.backend.entities.AppUser;
import ma.sieger.backend.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Set;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initUsers(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (userRepository.findByUsername("user").isEmpty()) {
                AppUser user = AppUser.builder()
                        .username("user")
                        .password(passwordEncoder.encode("123456"))
                        .roles(Set.of("ROLE_USER"))
                        .enabled(true)
                        .build();
                userRepository.save(user);
            }

            if (userRepository.findByUsername("admin").isEmpty()) {
                AppUser admin = AppUser.builder()
                        .username("admin")
                        .password(passwordEncoder.encode("123456"))
                        .roles(Set.of("ROLE_ADMIN"))
                        .enabled(true)
                        .build();
                userRepository.save(admin);
            }
        };
    }
}