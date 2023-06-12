/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;
/**
 *
 * @author Equipo1
 */
public class Estacion {
    int Nombre;
    String Nombre;
    String Apellidos;
    String Email;
    String Fechadenacimiento;
    String CarreradentrodeUPIICSA;
        public Nombre() {
    }
    public Estacion(int Nombre, String Nombre, String Apellidos, String Email, String Fechadenacimiento,
   String CarreradentrodeUPIICSA) {
        this.Nombre = Nombre;
        this.Nombre = Nombre;
        this.Apellidos = Apellidos;
        this.Email = Email;
        this.Fechadenacimiento = Fechadenacimiento;
        this.CarreradentrodeUPIICSA = CarreradentrodeUPIICSA;
    }
    public int getNombre() {
        return Nombre;
    }
    public void setNombre(int Nombre) {
        this.Nombre = Nombre;
    }
    public String getApellidos() {
        return Apellidos;
    }
    public void setApellidos(String Apellidos) {
        this.Apellidos = Apellidos;
    }
    public String getEmail() {
        return Email;
    }
    public void setFechadenacimiento(String Fechadenacimiento) {
        this.Fechadenacimiento = Fechadenacimiento;
    }
    public double getCarreradentrodeUPIICSA() {
        return CarreradentrodeUPIICSA;
    }
    public void setCarreradentrodeUPIICSA(String CarreradentrodeUPIICSA) {
        this.CarreradentrodeUPIICSA = CarreradentrodeUPIICSA;
    }
}