const welcomeController = (req, res) => {
    try {
        console.log("👋Hello there homie! We are Up! Try other routes like /publish or /subscribe")
        res.send("👋Hello there homie! We are Up! Try other routes like /mail")
      } catch (error) {
        
      }
       
};


export default welcomeController;