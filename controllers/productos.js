

const { response } = require('express');
const { executeQuery } = require('../database/ejecutar');



CargarProductos = async(req, res = response ) => { 
    try{        

     
        
        const query = "SELECT id , nombre, finalizado FROM productos ORDER BY nombre";
       
        data = await executeQuery(query);  
        const mappedData = data.map(row => ({
            id: row.id, 
            nombre: row.nombre ,
            finalizado: row.finalizado
        }));        
       
      
        return res.json(mappedData);    
    
     }catch(err){
         console.log('Error Error cargando '  + err);
         return res.json({
             numero: 0,
             nombre: ''
            });
     }
 }


GuardarProducto = async(req, res = response ) => {
   
    const { nombre } = req.query; 
    
    try{      
        
        const query ="INSERT INTO productos (nombre) VALUES ('" + nombre + "')";       
                       
        await executeQuery(query);  
         return res.json({
            resul: true,
            
        });
    }catch(error){
        console.log(error);
        return res.json({
            resul: false,
            
        });
    }   
  
   }



   EliminarProducto = async(req, res = response ) => {
   
    const { id} = req.query;    

   
   try{      
        
        const query ="DELETE FROM productos WHERE id =" + id;       
                       
        await executeQuery(query,process.env.IP);  
         return res.json({
            resul: true,
            
        });
    }catch(error){
        console.log(error);
        return res.json({
            resul: false,
            
        });
    }   
  
   }


 
   ActualizarEstado = async(req, res = response ) => {
   
    const { id , estado} = req.query;    
    try{      
            
        const query ="UPDATE productos SET finalizado = " + estado + "  WHERE Id = " + id;

        await executeQuery(query);  
        return res.json({
            resul: true,
                
        });
       
    }catch(error){
        console.log(error);
        return res.json({
        resul: false,                
            });
        }   
    
   }



//   Status = async(req, res = response ) => {  
//      return res.json({ resul: 1});
//    }

//    Keepalive = async(req, res = response ) => {  
     
//     return res.status(200).send('OK');
// }



  module.exports = {  
    CargarProductos ,
    ActualizarEstado,
    GuardarProducto,
    EliminarProducto
 
   
 }