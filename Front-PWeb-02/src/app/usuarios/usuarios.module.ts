
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CadastroUsuariosComponent } from "./cadastro-usuarios/cadastro-usuarios.component";
import { LoginUsuariosComponent } from "./login-usuarios/login-usuarios.component";

@NgModule({
    declarations: [LoginUsuariosComponent, CadastroUsuariosComponent],
    exports: [
      LoginUsuariosComponent, CadastroUsuariosComponent
    ],
      imports: [
        MatTableModule,
        MatMenuModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        FormsModule
          
      ]
  })
  export class UsuarioModule { }
  