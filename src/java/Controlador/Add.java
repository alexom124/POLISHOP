/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controlador;
import Modelo.NombreDAO;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
/**
 *
 * @author Equipo1
 */
public class Add extends HttpServlet {
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        //
    }
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }
    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
        NombreDAO dao = new NombreDAO();
        String action = request.getParameter("accion");
            if(action.equals("GUARDAR!")){
                String Nombre = request.getParameter("txtNombre");
                String Apellidos = request.getParameter("txtApellidos");
                String Email = request.getParameter("txtEmail");
                String Fechadenacimiento = request.getParameter("txtFechadenacimiento");
                String CarreradentrodeUPIICSA = request.getParameter("txtCarreradentrodeUPIICSA");
                es.setNombre(Nombre);
                es.setApellidos(Apellidos);
                es.setEmail(Email);
                es.setFechadenacimiento(Fechadenacimiento);
                es.setCarreradentrodeUPIICSA(CarreradentrodeUPIICSA);
                dao.add(es);
                request.getRequestDispatcher("AdminCliente.jsp").forward(request, response);
            } else {
                if(action.equals("Actualizar")){
                String Nombre = request.getParameter("txtNombre");
                String Apellidos = request.getParameter("txtApellidos");
                String Email = request.getParameter("txtEmail");
                String Fechadenacimiento = request.getParameter("txtFechadenacimiento");
                String CarreradentrodeUPIICSA = request.getParameter("txtCarreradentrodeUPIICSA");
                es.setNombre(Nombre);
                es.setApellidos(Apellidos);
                es.setEmail(Email);
                es.setFechadenacimiento(Fechadenacimiento);
                es.setCarreradentrodeUPIICSA(CarreradentrodeUPIICSA);
		dao.edit(es);
                request.getRequestDispatcher("AdminCliente.jsp").forward(request, response);
                } 
                        }
                    } 
                }
            }   
    }
    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
