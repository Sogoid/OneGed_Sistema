package br.edu.ipog.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import br.edu.ipog.backend.model.UserModel;
import br.edu.ipog.backend.repositories.UserRepository;
import br.edu.ipog.backend.service.UserService;
@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    // Endpoint de buscar os Users
    @CrossOrigin("http://localhost:4200")
    @GetMapping("/lista-usuario")
    public List<UserModel>getAllUser() {
        return userRepository.findAll();
    }

    @CrossOrigin("http://localhost:4200")
    @PostMapping("/createUser")
    public UserModel registrar(@RequestBody UserModel userModel) {
        validarCampo(userModel.getNameUser(), "nameUser");
        validarCampo(userModel.getEmailUser(), "emailUser");
        validarCampo(userModel.getSenhaUser(), "senhaUser");
        return userService.saveUser(userModel);
    }

    private void validarCampo(String campo, String nomeCampo) {
        if (campo == null || campo.isEmpty()) {
            throw new IllegalArgumentException(nomeCampo + " não pode ser nulo ou vazio");
        }
    }

    @CrossOrigin("http://localhost:4200")
    @PutMapping
    public UserModel atualizar(@RequestBody UserModel userModel) {
        return userRepository.save(userModel);
    }

    @CrossOrigin("http://localhost:4200")
    @DeleteMapping("/{id_user}")
    public void excluir(@PathVariable Long id_user) {
        userRepository.deleteById(id_user);
    }
}
