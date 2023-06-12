/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

import java.util.List;

/**
 *
 * @author Equipo1
 */
public interface CRUDNombre {
    public List listado();
    public Nombre list(int nombre);
    public boolean add(Nombre nombre);
    public boolean edit(Nombre nombre);
    public boolean eliminar(int nombre);
}
