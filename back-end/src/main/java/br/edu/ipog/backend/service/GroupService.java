package br.edu.ipog.backend.service;

import br.edu.ipog.backend.model.GroupModel;
import br.edu.ipog.backend.repositories.GroupRepository;
import org.springframework.stereotype.Service;

@Service
public class GroupService {
    private final GroupRepository groupRepository;

    public GroupService(GroupRepository groupRepository) {
        this.groupRepository = groupRepository;
    }

    public GroupModel saveGroup(GroupModel groupModel) {
        return groupRepository.save(groupModel);
    }
}

