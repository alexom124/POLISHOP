/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Modelo;

import java.util.List;
import java.sql.*;
import java.util.ArrayList;
/**
 *
 * @author Equipo1
 */
public class EstacionDAO implements CRUDEstacion{    
    ConexionDB DB = new ConexionDB();
    Connection con=null;
    PreparedStatement ps;
    ResultSet rs;
    Nombre es = new Nombre();
    @Override
    public List listado() {
        ArrayList<Nombre>list=new ArrayList<>();
        String sql= "SELECT * FROM Es";
        try {
            con=DB.ConectarDB();
            ps=con.prepareStatement(sql);
            rs=ps.executeQuery();
            while(rs.next()){
                Nombre nombre = new Nombre();
                nombre.setNombre(rs.getInt("Nombre"));
                nombre.setApellidos(rs.getString("Apellidos"));
                nombre.setEmail(rs.getString("Email"));
                nombre.setFechadenacimiento(rs.getString("Fechadenacimiento"));
                nombre.setCarreradentrodeUPIICSA(rs.getString("CarreradentrodeUPIICSA"));
                list.add(nombre);
            }
        } catch (SQLException e) {
        }
        return list;
    }
    @Override
    public Nombre list(int nombre) {
        Nombre est = new Nombre();
        String sql= "SELECT * FROM Es WHERE Nombre ="+nombre;
        try {
            con=DB.ConectarDB();
            ps=con.prepareStatement(sql);
            rs=ps.executeQuery();
            while(rs.next()){
                est.setNombre(rs.getInt("Nombre"));
                est.setApellidos(rs.getString("Apellidos"));
                est.setEmail(rs.getString("Email"));
                est.setFechadenacimiento(rs.getString("Fechadenacimiento"));
                est.setCarreradentrodeUPIICSA(rs.getString("CarreradentrodeUPIICSA"));
               }
        } catch (SQLException e) {
        }
        return est;
    }
    @Override
    public boolean add(Nombre nombre) {   
        String sql = "INSERT INTO Es VALUES (?,?,?,?,?,?,?)";
        try {
            con=DB.ConectarDB();
            ps=con.prepareStatement(sql);
            ps.setString(1, estacion.getNombre());
            ps.setString(2, estacion.getApellidos());
            ps.setString(3, estacion.getEmail());
            ps.setString(5, estacion.getFechadenacimiento());
            ps.setString(6, estacion.getCarreradentrodeUPIICSA());
            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error: "+e);
        }
        return false;
    }
    @Override
    public boolean edit(Nombre nombre) {
        String sql = "UPDATE Es SET Nombre=?, Apellidos=?, Email=?, Fechadenacimiento=?, CarreradentrodeUPIICSA=? WHERE Nombre=?";
        try {
            con=DB.ConectarDB();
            ps=con.prepareStatement(sql);
            ps.setString(1, estacion.getNombre());
            ps.setString(2, estacion.getApellidos());
            ps.setString(3, estacion.getEmail());
            ps.setString(5, estacion.getFechadenacimiento());
            ps.setString(6, estacion.getCarreradentrodeUPIICSA());
            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error: "+e);
        }
        return false;
    }
    @Override
    public boolean eliminar(int nombre) {
        String sql = "DELETE FROM Es WHERE Nombre ="+nombre;
        try {
            con=DB.ConectarDB();
            ps = con.prepareStatement(sql);
            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error: "+e);
        }
        return false;
    }
}
