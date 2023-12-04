package br.edu.ipog.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Entity
@Table(name = "tb_users")
@Getter public class UserModel {

    @Id
    @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Long idUser;
    @Setter
    @Column(name = "name_user", nullable = false)
    private String nameUser;
    @Setter
    @Column(name = "email_user", nullable = false)
    private String emailUser;
    @Setter
    @Column(name = "senha_user", nullable = false, length = 20)
    private String senhaUser;
    @Setter
    @Column(name = "status_user", nullable = false, length = 1)
    private Boolean statusUser; // Status do usuário, quando for Ativo - A e quanto for Bloqueado - B.
    @Setter
    @Column(name = "tipo_user", nullable = false, length = 1)
    private Boolean tipoUser; // Tipo do usuário, quando for Admin - A e quando for User - U.
    @Setter
    @Column(name = "deleted_user", nullable = false)
    private Boolean deletedUser; // Para marcar o usuário como deletado, pois assim não exclui todos os dados do usuário.

    @OneToMany(mappedBy = "userModel")
    private List<PertenceModel> pertenceModelList;

    @OneToMany(mappedBy = "userModel")
    private List<DocumentModel> documentModelList;


    public UserModel() {

    }

    public UserModel(Long idUser, String nameUser, String emailUser, String senhaUser, Boolean statusUser, Boolean tipoUser, Boolean deletedUser) {
        this.idUser = idUser;
        this.nameUser = nameUser;
        this.emailUser = emailUser;
        this.senhaUser = senhaUser;
        this.statusUser = statusUser;
        this.tipoUser = tipoUser;
        this.deletedUser = deletedUser;
    }


}
