package br.edu.ipog.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_pertence")
@Getter public class PertenceModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    private Long idPertence;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private UserModel userModel;

    @ManyToOne
    @JoinColumn(name = "id_group")
    private GroupModel groupModel;

    public PertenceModel(Long idPertence) {
        this.idPertence = idPertence;
    }

    public PertenceModel() {

    }
}
