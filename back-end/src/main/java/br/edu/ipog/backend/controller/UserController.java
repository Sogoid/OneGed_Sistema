package br.edu.ipog.backend.controller;

import br.edu.ipog.backend.model.UserModel;
import br.edu.ipog.backend.repositories.UserRepository;
import br.edu.ipog.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    // Endpoint de buscar os Users
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public List<UserModel> getAllUser() {
        return userRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/createUser")
    public UserModel registrar(@RequestBody UserModel userModel) {
        return userService.saveUser(userModel);
    }

    @PutMapping
    public UserModel atualizar(@RequestBody UserModel userModel) {
        return userRepository.save(userModel);
    }

    @DeleteMapping("/{id_user}")
    public void excluir(@PathVariable Long id_user) {
        userRepository.deleteById(id_user);
    }
}

