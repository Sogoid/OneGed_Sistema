package br.edu.ipog.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ipog.backend.model.GroupModel;
import br.edu.ipog.backend.repositories.GroupRepository;
import br.edu.ipog.backend.service.GroupService;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class GroupController {

    private final GroupService groupService;
    private final GroupRepository groupRepository;

    public GroupController(GroupService groupService, GroupRepository groupRepository) {
        this.groupService = groupService;
        this.groupRepository = groupRepository;
    }

    // Endpoint de buscar os Users
    @CrossOrigin("http://localhost:4200")
    @GetMapping("/lista-grupo")
    public List<GroupModel> getAllGroup() {
        return groupRepository.findAll();
    }

    @GetMapping("/grupo/{idGroup}")
    public GroupModel getGroupById(@PathVariable Long idGroup) {
        return groupRepository.findById(idGroup)
                .orElseThrow(() -> new IllegalArgumentException("Grupo não encontrado"));
    }

    @CrossOrigin("http://localhost:4200")
    @PostMapping("/criar-grupo")
    public GroupModel registrarGrupo(@RequestBody GroupModel groupModel) {
        validarCampo(groupModel.getDescriptionGroup(), "descriptionGroup");
        return groupService.saveGroup(groupModel);
    }

    private void validarCampo(String campo, String nameCampo) {
        if (campo == null || campo.isEmpty()) {
            throw new IllegalArgumentException(nameCampo + " não pode ser nulo ou vazio");
        }
    }

    @CrossOrigin("http://localhost:4200")
    @PutMapping("/atualizar-grupo/{idGroup}")
    public GroupModel atualizarGrupo(@PathVariable Long idGroup, @RequestBody GroupModel newGroupModel) {
        return groupRepository.findById(idGroup)
                .map(groupModel -> {
                    groupModel.setDescriptionGroup(newGroupModel.getDescriptionGroup());
                    // Adicione aqui outros campos que você deseja atualizar
                    return groupService.saveGroup(groupModel);
                })
                .orElseGet(() -> {
                    newGroupModel.setIdGroup(idGroup);
                    return groupService.saveGroup(newGroupModel);
                });
    }

}
