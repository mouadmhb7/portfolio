var page_size = 36;
$.ajax({
    url: "https://icon-icons.com/proxy.php",
    type: "GET",
    data: {
        page_size: page_size,
        page: pag,
        phrase: filtro || "",
        idioma: idioma
    },
    success: function (o) {
        if (o.images.length > 0) {    

            if (o.images.length <= 14) {
                $("#istockphoto-placeholder").removeClass("istock-big-container").addClass("istock-container");
            }

            // Renderizar dinámicamente el contenido de `pintaistock.php`
            let html = `
                <div id="flex-istock" class="flex-images">
                <div style="font-size:14px;color:#1d262d;margin:5px 7px;text-align:left;">
                    Related images by iStock
                </div>`;
            
            o.images.forEach(function(imagen) {
                let uri = '';
                if (imagen.referral_destinations[2]?.site_name === "istockphoto") {
                    uri = imagen.referral_destinations[2].uri;
                } else if (imagen.referral_destinations[1]?.site_name === "istockphoto") {
                    uri = imagen.referral_destinations[1].uri;
                } else if (imagen.referral_destinations[0]?.site_name === "istockphoto") {
                    uri = imagen.referral_destinations[0].uri;
                }
                
                const url = `https://istockphoto.6q33.net/c/2205776/258824/4205?u=${encodeURIComponent(uri)}`;
                
                html += `
                    <div id="contenedor-istock" class="item" data-w="128" data-h="128">
                        <a href="${url}" style="text-decoration: none;" class="shadow-sm" target="_blank" rel="sponsored noreferrer noopener">
                            <img src="${imagen.display_sizes[0].uri}" loading="lazy" alt="${imagen.title}" class="rounded shadow-sm">
                        </a>
                    </div>`;
            });

            html += `</div>`;
            
            // Agregar script de flexImages
            html += `
            <script>
                var maxRows = 1;
                var rowHeight = 150;
                var count_images = ${o.images.length};
                if (count_images > 14) {
                    maxRows = 2;
                    rowHeight = 150;
                }
                new flexImages({ selector: '#flex-istock', rowHeight: rowHeight, "maxRows": maxRows });
            </script>`;
            
            $("#istockphoto-placeholder").html(html);

        } else {
            $("#istockphoto-placeholder").removeClass("istock-big-container");
        }                                     
    },
    error: function (error) {
        console.error("Error en la solicitud:", error);
    }
});
