$(document).ready(function(){
    
    $("form").on("submit", function(evt){
        evt.preventDefault()
       let tarefa = $("input").val()
       let item = `<li>${tarefa}</li>`
       $(item).appendTo($("ol"))

       $("input").val("")

       $("li").click(function(event){
        let clicado=event.target
        $(clicado).addClass("marcado");
      })
  
    })

    
})


