ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([367820.374252, 6430805.976275, 430966.377730, 6463162.776275]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Carnaval_1 = new ol.format.GeoJSON();
var features_Carnaval_1 = format_Carnaval_1.readFeatures(json_Carnaval_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Carnaval_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carnaval_1.addFeatures(features_Carnaval_1);
var lyr_Carnaval_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carnaval_1, 
                style: style_Carnaval_1,
                popuplayertitle: "Carnaval ",
                interactive: true,
                title: '<img src="styles/legend/Carnaval_1.png" /> Carnaval '
            });
var format_ArtesCnicas_2 = new ol.format.GeoJSON();
var features_ArtesCnicas_2 = format_ArtesCnicas_2.readFeatures(json_ArtesCnicas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ArtesCnicas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArtesCnicas_2.addFeatures(features_ArtesCnicas_2);
var lyr_ArtesCnicas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArtesCnicas_2, 
                style: style_ArtesCnicas_2,
                popuplayertitle: "Artes Cênicas ",
                interactive: true,
                title: '<img src="styles/legend/ArtesCnicas_2.png" /> Artes Cênicas '
            });
var format_ArtesVisuais_3 = new ol.format.GeoJSON();
var features_ArtesVisuais_3 = format_ArtesVisuais_3.readFeatures(json_ArtesVisuais_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ArtesVisuais_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArtesVisuais_3.addFeatures(features_ArtesVisuais_3);
var lyr_ArtesVisuais_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArtesVisuais_3, 
                style: style_ArtesVisuais_3,
                popuplayertitle: "Artes Visuais ",
                interactive: true,
                title: '<img src="styles/legend/ArtesVisuais_3.png" /> Artes Visuais '
            });
var format_Artesanato_4 = new ol.format.GeoJSON();
var features_Artesanato_4 = format_Artesanato_4.readFeatures(json_Artesanato_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Artesanato_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Artesanato_4.addFeatures(features_Artesanato_4);
var lyr_Artesanato_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Artesanato_4, 
                style: style_Artesanato_4,
                popuplayertitle: "Artesanato ",
                interactive: true,
                title: '<img src="styles/legend/Artesanato_4.png" /> Artesanato '
            });
var format_Audiovisual_5 = new ol.format.GeoJSON();
var features_Audiovisual_5 = format_Audiovisual_5.readFeatures(json_Audiovisual_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Audiovisual_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Audiovisual_5.addFeatures(features_Audiovisual_5);
var lyr_Audiovisual_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Audiovisual_5, 
                style: style_Audiovisual_5,
                popuplayertitle: "Audiovisual ",
                interactive: true,
                title: '<img src="styles/legend/Audiovisual_5.png" /> Audiovisual '
            });
var format_EspaodeArteeCultura_6 = new ol.format.GeoJSON();
var features_EspaodeArteeCultura_6 = format_EspaodeArteeCultura_6.readFeatures(json_EspaodeArteeCultura_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_EspaodeArteeCultura_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspaodeArteeCultura_6.addFeatures(features_EspaodeArteeCultura_6);
var lyr_EspaodeArteeCultura_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EspaodeArteeCultura_6, 
                style: style_EspaodeArteeCultura_6,
                popuplayertitle: "Espaço de Arte e Cultura ",
                interactive: true,
                title: '<img src="styles/legend/EspaodeArteeCultura_6.png" /> Espaço de Arte e Cultura '
            });
var format_CulturaIdentitria_7 = new ol.format.GeoJSON();
var features_CulturaIdentitria_7 = format_CulturaIdentitria_7.readFeatures(json_CulturaIdentitria_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CulturaIdentitria_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CulturaIdentitria_7.addFeatures(features_CulturaIdentitria_7);
var lyr_CulturaIdentitria_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CulturaIdentitria_7, 
                style: style_CulturaIdentitria_7,
                popuplayertitle: "Cultura Identitária",
                interactive: true,
                title: '<img src="styles/legend/CulturaIdentitria_7.png" /> Cultura Identitária'
            });
var format_Dana_8 = new ol.format.GeoJSON();
var features_Dana_8 = format_Dana_8.readFeatures(json_Dana_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Dana_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dana_8.addFeatures(features_Dana_8);
var lyr_Dana_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dana_8, 
                style: style_Dana_8,
                popuplayertitle: "Dança ",
                interactive: true,
                title: '<img src="styles/legend/Dana_8.png" /> Dança '
            });
var format_EconomiaCriativa_9 = new ol.format.GeoJSON();
var features_EconomiaCriativa_9 = format_EconomiaCriativa_9.readFeatures(json_EconomiaCriativa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_EconomiaCriativa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EconomiaCriativa_9.addFeatures(features_EconomiaCriativa_9);
var lyr_EconomiaCriativa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EconomiaCriativa_9, 
                style: style_EconomiaCriativa_9,
                popuplayertitle: "Economia Criativa ",
                interactive: true,
                title: '<img src="styles/legend/EconomiaCriativa_9.png" /> Economia Criativa '
            });
var format_Literatura_10 = new ol.format.GeoJSON();
var features_Literatura_10 = format_Literatura_10.readFeatures(json_Literatura_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Literatura_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Literatura_10.addFeatures(features_Literatura_10);
var lyr_Literatura_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Literatura_10, 
                style: style_Literatura_10,
                popuplayertitle: "Literatura ",
                interactive: true,
                title: '<img src="styles/legend/Literatura_10.png" /> Literatura '
            });
var format_Msica_11 = new ol.format.GeoJSON();
var features_Msica_11 = format_Msica_11.readFeatures(json_Msica_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Msica_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Msica_11.addFeatures(features_Msica_11);
var lyr_Msica_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Msica_11, 
                style: style_Msica_11,
                popuplayertitle: "Música",
                interactive: true,
                title: '<img src="styles/legend/Msica_11.png" /> Música'
            });
var format_Teatro_12 = new ol.format.GeoJSON();
var features_Teatro_12 = format_Teatro_12.readFeatures(json_Teatro_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Teatro_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Teatro_12.addFeatures(features_Teatro_12);
var lyr_Teatro_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Teatro_12, 
                style: style_Teatro_12,
                popuplayertitle: "Teatro",
                interactive: true,
                title: '<img src="styles/legend/Teatro_12.png" /> Teatro'
            });
var format_CulturaTradicionalista_13 = new ol.format.GeoJSON();
var features_CulturaTradicionalista_13 = format_CulturaTradicionalista_13.readFeatures(json_CulturaTradicionalista_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CulturaTradicionalista_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CulturaTradicionalista_13.addFeatures(features_CulturaTradicionalista_13);
var lyr_CulturaTradicionalista_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CulturaTradicionalista_13, 
                style: style_CulturaTradicionalista_13,
                popuplayertitle: "Cultura Tradicionalista ",
                interactive: true,
                title: '<img src="styles/legend/CulturaTradicionalista_13.png" /> Cultura Tradicionalista '
            });
var format_Patrimnio_14 = new ol.format.GeoJSON();
var features_Patrimnio_14 = format_Patrimnio_14.readFeatures(json_Patrimnio_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Patrimnio_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Patrimnio_14.addFeatures(features_Patrimnio_14);
var lyr_Patrimnio_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Patrimnio_14, 
                style: style_Patrimnio_14,
                popuplayertitle: "Patrimônio",
                interactive: true,
                title: '<img src="styles/legend/Patrimnio_14.png" /> Patrimônio'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Carnaval_1.setVisible(true);lyr_ArtesCnicas_2.setVisible(true);lyr_ArtesVisuais_3.setVisible(true);lyr_Artesanato_4.setVisible(true);lyr_Audiovisual_5.setVisible(true);lyr_EspaodeArteeCultura_6.setVisible(true);lyr_CulturaIdentitria_7.setVisible(true);lyr_Dana_8.setVisible(true);lyr_EconomiaCriativa_9.setVisible(true);lyr_Literatura_10.setVisible(true);lyr_Msica_11.setVisible(true);lyr_Teatro_12.setVisible(true);lyr_CulturaTradicionalista_13.setVisible(true);lyr_Patrimnio_14.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Carnaval_1,lyr_ArtesCnicas_2,lyr_ArtesVisuais_3,lyr_Artesanato_4,lyr_Audiovisual_5,lyr_EspaodeArteeCultura_6,lyr_CulturaIdentitria_7,lyr_Dana_8,lyr_EconomiaCriativa_9,lyr_Literatura_10,lyr_Msica_11,lyr_Teatro_12,lyr_CulturaTradicionalista_13,lyr_Patrimnio_14];
lyr_Carnaval_1.set('fieldAliases', {'qc_id': 'qc_id', 'latitude': 'latitude', 'longitude': 'longitude', 'nome': 'nome', 'e-mail': 'e-mail', 'descriçã': 'descriçã', 'atuação': 'atuação', 'área de a': 'área de a', 'redes soci': 'redes soci', 'foto ou lo': 'foto ou lo', });
lyr_ArtesCnicas_2.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'DESCRIÇÃO DE SUAS ATIVIDADES', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE ATUAÇÃO': 'ÁREA DE ATUAÇÃO', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO', 'FOTO OU LOGO PROFISSIONAL': 'FOTO OU LOGO PROFISSIONAL', });
lyr_ArtesVisuais_3.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'DESCRIÇÃO DE SUAS ATIVIDADES', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE ATUAÇÃO': 'ÁREA DE ATUAÇÃO', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO', 'FOTO OU LOGO PROFISSIONAL': 'FOTO OU LOGO PROFISSIONAL', });
lyr_Artesanato_4.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'DESCRIÇÃO DE SUAS ATIVIDADES', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE ATUAÇÃO': 'ÁREA DE ATUAÇÃO', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO', 'FOTO OU LOGO PROFISSIONAL': 'FOTO OU LOGO PROFISSIONAL', });
lyr_Audiovisual_5.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'DESCRIÇÃO DE SUAS ATIVIDADES', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE ATUAÇÃO': 'ÁREA DE ATUAÇÃO', });
lyr_EspaodeArteeCultura_6.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'DESCRIÇÃO DE SUAS ATIVIDADES', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE ATUAÇÃO': 'ÁREA DE ATUAÇÃO', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO', 'FOTO OU LOGO PROFISSIONAL': 'FOTO OU LOGO PROFISSIONAL', });
lyr_CulturaIdentitria_7.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'DESCRIÇÃO DE SUAS ATIVIDADES', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE ATUAÇÃO': 'ÁREA DE ATUAÇÃO', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO', 'FOTO OU LOGO PROFISSIONAL': 'FOTO OU LOGO PROFISSIONAL', });
lyr_Dana_8.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'DESCRIÇÃO DE SUAS ATIVIDADES', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE ATUAÇÃO': 'ÁREA DE ATUAÇÃO', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO', 'FOTO OU LOGO PROFISSIONAL': 'FOTO OU LOGO PROFISSIONAL', });
lyr_EconomiaCriativa_9.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'DESCRIÇÃO DE SUAS ATIVIDADES', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE ATUAÇÃO': 'ÁREA DE ATUAÇÃO', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO', 'FOTO OU LOGO PROFISSIONAL': 'FOTO OU LOGO PROFISSIONAL', });
lyr_Literatura_10.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'DESCRIÇÃO DE SUAS ATIVIDADES', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE ATUAÇÃO': 'ÁREA DE ATUAÇÃO', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO', 'FOTO OU LOGO PROFISSIONAL': 'FOTO OU LOGO PROFISSIONAL', });
lyr_Msica_11.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'DESCRIÇÃO DE SUAS ATIVIDADES', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE ATUAÇÃO': 'ÁREA DE ATUAÇÃO', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO', 'FOTO OU LOGO PROFISSIONAL': 'FOTO OU LOGO PROFISSIONAL', });
lyr_Teatro_12.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'DESCRIÇÃO DE SUAS ATIVIDADES', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE ATUAÇÃO': 'ÁREA DE ATUAÇÃO', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO', 'FOTO OU LOGO PROFISSIONAL': 'FOTO OU LOGO PROFISSIONAL', });
lyr_CulturaTradicionalista_13.set('fieldAliases', {'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'NOME': 'NOME', 'E-MAIL': 'E-MAIL', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'DESCRIÇÃO DE SUAS ATIVIDADES', 'ATUAÇÃO': 'ATUAÇÃO', 'ÁREA DE ATUAÇÃO': 'ÁREA DE ATUAÇÃO', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO', 'FOTO OU LOGO PROFISSIONAL': 'FOTO OU LOGO PROFISSIONAL', });
lyr_Patrimnio_14.set('fieldAliases', {'id': 'id', 'latitude': 'latitude', 'longitude': 'longitude', 'nome museu': 'nome museu', 'endereço': 'endereço', 'contato': 'contato', 'email': 'email', 'tipo': 'tipo', 'tipologia': 'tipologia', 'descriçã': 'descriçã', 'acessibili': 'acessibili', 'horários': 'horários', 'observaç�': 'observaç�', });
lyr_Carnaval_1.set('fieldImages', {'qc_id': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'nome': 'TextEdit', 'e-mail': 'TextEdit', 'descriçã': 'TextEdit', 'atuação': 'TextEdit', 'área de a': 'TextEdit', 'redes soci': 'TextEdit', 'foto ou lo': 'TextEdit', });
lyr_ArtesCnicas_2.set('fieldImages', {'LATITUDE': 'Range', 'LONGITUDE': 'Range', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE ATUAÇÃO': 'TextEdit', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'TextEdit', 'FOTO OU LOGO PROFISSIONAL': 'TextEdit', });
lyr_ArtesVisuais_3.set('fieldImages', {'LATITUDE': 'Range', 'LONGITUDE': 'Range', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE ATUAÇÃO': 'TextEdit', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'TextEdit', 'FOTO OU LOGO PROFISSIONAL': 'TextEdit', });
lyr_Artesanato_4.set('fieldImages', {'LATITUDE': 'Range', 'LONGITUDE': 'Range', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE ATUAÇÃO': 'TextEdit', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'TextEdit', 'FOTO OU LOGO PROFISSIONAL': 'TextEdit', });
lyr_Audiovisual_5.set('fieldImages', {'LATITUDE': 'Range', 'LONGITUDE': 'Range', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE ATUAÇÃO': 'TextEdit', });
lyr_EspaodeArteeCultura_6.set('fieldImages', {'LATITUDE': 'Range', 'LONGITUDE': 'Range', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE ATUAÇÃO': 'TextEdit', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'TextEdit', 'FOTO OU LOGO PROFISSIONAL': 'TextEdit', });
lyr_CulturaIdentitria_7.set('fieldImages', {'LATITUDE': 'Range', 'LONGITUDE': 'Range', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE ATUAÇÃO': 'TextEdit', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'TextEdit', 'FOTO OU LOGO PROFISSIONAL': 'TextEdit', });
lyr_Dana_8.set('fieldImages', {'LATITUDE': 'Range', 'LONGITUDE': 'Range', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE ATUAÇÃO': 'TextEdit', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'TextEdit', 'FOTO OU LOGO PROFISSIONAL': 'TextEdit', });
lyr_EconomiaCriativa_9.set('fieldImages', {'LATITUDE': 'Range', 'LONGITUDE': 'Range', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE ATUAÇÃO': 'TextEdit', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'TextEdit', 'FOTO OU LOGO PROFISSIONAL': 'TextEdit', });
lyr_Literatura_10.set('fieldImages', {'LATITUDE': 'Range', 'LONGITUDE': 'Range', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE ATUAÇÃO': 'TextEdit', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'TextEdit', 'FOTO OU LOGO PROFISSIONAL': 'TextEdit', });
lyr_Msica_11.set('fieldImages', {'LATITUDE': 'Range', 'LONGITUDE': 'Range', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE ATUAÇÃO': 'TextEdit', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'TextEdit', 'FOTO OU LOGO PROFISSIONAL': 'TextEdit', });
lyr_Teatro_12.set('fieldImages', {'LATITUDE': 'Range', 'LONGITUDE': 'Range', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE ATUAÇÃO': 'TextEdit', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'TextEdit', 'FOTO OU LOGO PROFISSIONAL': 'TextEdit', });
lyr_CulturaTradicionalista_13.set('fieldImages', {'LATITUDE': 'Range', 'LONGITUDE': 'Range', 'NOME': 'TextEdit', 'E-MAIL': 'TextEdit', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'TextEdit', 'ATUAÇÃO': 'TextEdit', 'ÁREA DE ATUAÇÃO': 'TextEdit', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'TextEdit', 'FOTO OU LOGO PROFISSIONAL': 'TextEdit', });
lyr_Patrimnio_14.set('fieldImages', {'id': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'nome museu': 'TextEdit', 'endereço': 'TextEdit', 'contato': 'TextEdit', 'email': 'TextEdit', 'tipo': 'TextEdit', 'tipologia': 'TextEdit', 'descriçã': 'TextEdit', 'acessibili': 'TextEdit', 'horários': 'TextEdit', 'observaç�': 'TextEdit', });
lyr_Carnaval_1.set('fieldLabels', {'qc_id': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'nome': 'no label', 'e-mail': 'no label', 'descriçã': 'no label', 'atuação': 'no label', 'área de a': 'no label', 'redes soci': 'no label', 'foto ou lo': 'no label', });
lyr_ArtesCnicas_2.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE ATUAÇÃO': 'no label', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'no label', 'FOTO OU LOGO PROFISSIONAL': 'no label', });
lyr_ArtesVisuais_3.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE ATUAÇÃO': 'no label', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'no label', 'FOTO OU LOGO PROFISSIONAL': 'no label', });
lyr_Artesanato_4.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE ATUAÇÃO': 'no label', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'no label', 'FOTO OU LOGO PROFISSIONAL': 'no label', });
lyr_Audiovisual_5.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE ATUAÇÃO': 'no label', });
lyr_EspaodeArteeCultura_6.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE ATUAÇÃO': 'no label', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'no label', 'FOTO OU LOGO PROFISSIONAL': 'no label', });
lyr_CulturaIdentitria_7.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE ATUAÇÃO': 'no label', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'no label', 'FOTO OU LOGO PROFISSIONAL': 'no label', });
lyr_Dana_8.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE ATUAÇÃO': 'no label', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'no label', 'FOTO OU LOGO PROFISSIONAL': 'no label', });
lyr_EconomiaCriativa_9.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE ATUAÇÃO': 'no label', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'no label', 'FOTO OU LOGO PROFISSIONAL': 'no label', });
lyr_Literatura_10.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE ATUAÇÃO': 'no label', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'no label', 'FOTO OU LOGO PROFISSIONAL': 'no label', });
lyr_Msica_11.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE ATUAÇÃO': 'no label', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'no label', 'FOTO OU LOGO PROFISSIONAL': 'no label', });
lyr_Teatro_12.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE ATUAÇÃO': 'no label', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'no label', 'FOTO OU LOGO PROFISSIONAL': 'no label', });
lyr_CulturaTradicionalista_13.set('fieldLabels', {'LATITUDE': 'hidden field', 'LONGITUDE': 'hidden field', 'NOME': 'no label', 'E-MAIL': 'no label', 'DESCRIÇÃO DE SUAS ATIVIDADES': 'no label', 'ATUAÇÃO': 'no label', 'ÁREA DE ATUAÇÃO': 'no label', 'REDES SOCIAS PARA DIVULGAÇÃO DO TRABALHO': 'no label', 'FOTO OU LOGO PROFISSIONAL': 'no label', });
lyr_Patrimnio_14.set('fieldLabels', {'id': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'nome museu': 'no label', 'endereço': 'no label', 'contato': 'no label', 'email': 'no label', 'tipo': 'no label', 'tipologia': 'no label', 'descriçã': 'no label', 'acessibili': 'no label', 'horários': 'no label', 'observaç�': 'no label', });
lyr_Patrimnio_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});