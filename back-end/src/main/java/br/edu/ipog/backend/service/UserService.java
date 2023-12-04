package br.edu.ipog.backend.service;

import br.edu.ipog.backend.model.UserModel;
import br.edu.ipog.backend.repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;


    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserModel saveUser(UserModel userModel) {
        return userRepository.save(userModel);
    }

}
