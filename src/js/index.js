import { getImages } from "../db/supabase.js"
// import $ from "jquery"
    
    const {images} = await getImages()
    console.log(images[0].url)

    images.forEach((img,i) => {
        $("#images_container").append(`<img class="imagen" id="${img.name+i}"src="${img.url}" alt="">`)
    $(`#${img.name+i}`).on("click",(e)=>{
        console.log("on click e ", e)
        openModal(e.target)})
        
    });

    

    const openModal = (target)=>{
        console.log("🚀 ~ openModal ~ target:", target)
        const $cloned = $(target).clone(); // clona la imagen
        $cloned.removeClass("imagen")
        $cloned.addClass("modal_image")
        console.log("🚀 ~ openModal ~ $cloned:", $cloned)
          $("#modal").append(`<div class="modal_backdrop" style="height:${$(document).height()}px; width:${$(document).width()}px"></div>`)
          $("#modal").append($cloned);
          $("#modal").css({ top: window.scrollY + "px", height:"100%"});
    }

    const closeModal = ()=>{
          $("#modal").empty()
          $("#modal").css("top","")
          $("#modal").css("height","")


        
    }


    $("#modal").on("click",closeModal)