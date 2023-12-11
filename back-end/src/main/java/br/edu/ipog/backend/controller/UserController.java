package br.edu.ipog.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public List<UserModel> getAllUser() {
        return userRepository.findAll();
    }

    @GetMapping("/usuario/{idUser}")
    public UserModel getGroupById(@PathVariable Long idUser) {
        return userRepository.findById(idUser)
                .orElseThrow(() -> new IllegalArgumentException("Usuário não encontrado"));
    }

    @CrossOrigin("http://localhost:4200")
    @PostMapping("/criar-usuario")
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
    @PutMapping("/atualizar-usuario/{idGroup}")
    public UserModel atualizarUser(@PathVariable Long idUser, @RequestBody UserModel newUserModel) {
        return userRepository.findById(idUser)
                .map(userModel -> {
                    userModel.setEmailUser(newUserModel.getEmailUser());
                    userModel.setSenhaUser(newUserModel.getSenhaUser());
                    return userService.saveUser(userModel); // Salve o userModel atualizado
                })
                .orElseGet(() -> {
                    newUserModel.setIdUser(idUser);
                    return userService.saveUser(newUserModel);
                });
    }

    @CrossOrigin("http://localhost:4200")
    @DeleteMapping("/{id_user}")
    public void excluir(@PathVariable Long idUser) {
        userRepository.deleteById(idUser);
    }
}
