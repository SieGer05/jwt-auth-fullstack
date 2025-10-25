package ma.sieger.backend.controller;

import ma.sieger.backend.model.AuthRequest;
import ma.sieger.backend.model.AuthResponse;
import ma.sieger.backend.service.JwtService;
import ma.sieger.backend.service.MyUserDetailsService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class AuthController {
    private final JwtService jwtService;
    private final MyUserDetailsService userDetailsService;
    private final AuthenticationManager authenticationManager;

    public AuthController(JwtService jwtService,
                          MyUserDetailsService userDetailsService,
                          AuthenticationManager authenticationManager) {
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/auth/login")
    public AuthResponse login(@RequestBody AuthRequest req) {
        var auth = new UsernamePasswordAuthenticationToken(req.username(), req.password());
        authenticationManager.authenticate(auth);

        UserDetails user = userDetailsService.loadUserByUsername(req.username());
        String token = jwtService.generateToken(
                user.getUsername(),
                Map.of("roles", user.getAuthorities())
        );

        return new AuthResponse(token);
    }

    @GetMapping("/hello")
    public Map<String, String> hello() {
        return Map.of("Message", "Hello World, The ENDPOINT is protected!!");
    }
}