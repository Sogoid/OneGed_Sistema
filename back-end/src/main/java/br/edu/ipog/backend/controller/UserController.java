package br.edu.ipog.backend.controller;

import br.edu.ipog.backend.model.UserModel;
import br.edu.ipog.backend.repositories.UserRepository;
import br.edu.ipog.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    // Endpoint de buscar os Users
    @GetMapping("/search")
    public List<UserModel> getAllUser() {
        return userRepository.findAll();
    }

    @PostMapping("/registrar")
    public UserModel registrar(@RequestBody UserModel userModel) {
        return userService.saveUser(userModel);
    }
}
