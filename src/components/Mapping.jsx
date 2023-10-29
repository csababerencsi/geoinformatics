import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  Polyline,
  Polygon,
  Circle,
  Rectangle,
  ImageOverlay,
  LayerGroup,
} from "react-leaflet";

function Mapping() {
  const position = [48.218873628931675, 22.080203611990953]; /*Starting position*/
  const nemzetiDohanybolt = [
    [48.22730705999206, 22.085054309651014],
    [48.224148311512664,22.083948475364167],
    [48.20931916488337,22.077996259749995],
    [48.220606166778595,22.08355661312413],
    [48.215194350614354,22.08021600126341],
    [48.22507596015518,22.078231362260937],
    [48.208737173060655, 22.087529076538942],
  ];
  const icon = L.icon({
    iconUrl:
      "data:image/jpeg;base64,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", iconSize: [30, 32]});
  const marker_icon = L.icon({ iconUrl: "https://www.nemzetijelkepek.hu/sites/default/files/coats/Kisvarda.jpg", iconSize: [30, 32]});
  const vardaplexCinema = [48.22754323048318, 22.078470529050605];
  const retkoziMuzeum = [48.22588162855578, 22.0797783507993];
  const BessenyeiGyorgyGimnazium = [48.22486478460502, 22.086767247372677];
  const kisvarda_harmasut = [
    [48.228571639987024, 22.092140520895413],
    [48.225472009953734, 22.090331087852974],
  ];
  const krudyPark = [
    [48.22549978117419, 22.083790946816663],
    [48.22549978117419, 22.082396402481862],
    [48.22512644480631, 22.082396402481862],
    [48.22512644480631, 22.083790946816663],
    [48.22549978117419, 22.083790946816663],
  ];
  const varosiSportcsarnok = [
    [48.22770264138015, 22.079246175388676],
    [48.22787467075932, 22.079365361294748],
    [48.22810757115019, 22.078836970441984],
    [48.228737455535395, 22.07884491616889],
    [48.228700403727515, 22.077986777640774],
    [48.22763647608096, 22.07805431632127],
    [48.22770264138015, 22.079250148251674],
  ];
  const foter = [
    [48.22383961717074, 22.078720421921275],
    [48.22400214892667, 22.080263425094415],
    [48.224416461417036, 22.080159012669412],
    [48.22447824617589, 22.07946532640213],
    [48.22526149279872, 22.079502650590314],
    [48.22532944751799, 22.080241256971448],
    [48.22606626085184, 22.08012356614816],
    [48.226075074961386, 22.078655128671414],
    [48.226211023315926, 22.078056868014926],
    [48.22626887609877, 22.076356173284893],
    [48.226130117852506, 22.075920617170425],
    [48.22570808792159, 22.07584126374917],
    [48.22506689361822, 22.075722704627196],
    [48.22469218510062, 22.075732607567375],
    [48.22408037608571, 22.075823708187556],
    [48.22337703981245, 22.07584793769783],
    [48.22383272822529, 22.078730682786954],
  ];
  const route = [
    [48.20816140103403, 22.078278893218084],
    [48.20835207404605, 22.077770247494897],
    [48.21036469032481, 22.080313476111684],
    [48.212123016648945, 22.080154524323575],
    [48.21358471185201, 22.08473233583402],
    [48.208247020114214, 22.088026662812098],
    [48.20870096560046, 22.08964813882679],
    [48.20820261218785, 22.089973914829017],
  ];

  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ minHeight: "70vh", minWidth: "50vw" }}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Satellite">
            <TileLayer
              url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
              maxZoom={20}
              subdomains={["mt1", "mt2", "mt3"]}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Street">
            <TileLayer
              url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
              maxZoom={20}
              subdomains={["mt1", "mt2", "mt3"]}
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name="Nemzeti dohányboltok Kisvárdán">
            <LayerGroup>
              {nemzetiDohanybolt.map((item) => (
                <Marker position={item} icon={icon}>
                  <Popup>Nemzeti dohánybolt</Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Fontosabb intézmények Kisvárdán">
            <LayerGroup>
              <Marker position={vardaplexCinema} icon={marker_icon}>
                <Popup>
                  <center>Várdaplex Cinema</center>
                  <img src="https://lh5.googleusercontent.com/p/AF1QipP2PFCMMHnZWvFRJdWpkB6mxPfgydvFuBeHD_if=w280-h157-k-no"></img>
                  Várdaplex Cinema néven, 2014-ben a Művészetek Házában új kezdeményezésként a Szabolcs Cinema Kft egy 97 fős mozitermet épített, amelyet április 3-án adtak át a közönségnek. Nem sokkal később, ugyan ebben az évben október 2-án egy második – 102 fős - moziterem is megépítésre került a bővebb filmkínálat és a megnövekedett érdeklődés miatt. A Művészetek Házának baloldalánál választották le és alakították ki a mozit, önálló üzemként működtetve, amely a város központjában, a Flórián téren látható.
                </Popup>
              </Marker>
              <Marker position={retkoziMuzeum} icon={marker_icon}>
                <Popup>
                  <center>Rétközi Múzeum</center>
                  <img src="https://www.termalfurdo.hu/upload/images/Galeria/cikk/retkozi_muzeum___kisvarda/termalfurdo_kisvarda_4.jpg"></img>
                  Romantizáló homlokzatú zsinagóga, impozáns méreteivel a zsidóság lélekszámát és tekintélyének súlyát fejezi ki. Magasan emelkedik a szomszédos házak fölé, és formailag és érezhető rajta a szomszédos városok zsinagógáinak hatása. Az ívsoros elemmel hangsúlyozott, romantizáló főpárkány felett íves tető fedi az épületet. Alaprajzában a hagyományos (ortodox) zsinagógák elrendezését követi. A női karzatra az épület oldalhomlokzata felőli lépcsőházon keresztül lehetett feljutni. Az öntöttvas oszlopokkal alátámasztott karzat a belső teret három oldalról vette körül.
                </Popup>
              </Marker>
              <Marker position={BessenyeiGyorgyGimnazium} icon={marker_icon}>
                <Popup>
                  <center>Bessenyei György Gimnázium és Kollégium</center>
                  <img src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/277778097_372495268220011_8784451530629347406_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D92rkLPZY1MAX-b4o48&_nc_ht=scontent-vie1-1.xx&oh=00_AfCpgGUSK0h9x3Km7HD2DaGBEytIFe1kvMnRuW3ag5e3tA&oe=65443A4E"></img>
                  1911. szeptember 15-én – megnyílt Kisvárdán az Állami Főgimnázium I. és V. osztálya, majd felmenő rendszerrel az 1914/15. tanévre benépesült. Az intézet ideiglenes épületben kapott helyet, az új épület tervezésével Wälder Gyula műépítészt bízta meg a Vallás- és Közoktatásügyi Minisztérium.  1929 őszén – elkészült a gimnázium mai épülete. 
                </Popup>
              </Marker>
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Kisvárda-hármasút vasútállomást átfedő kép">
            <LayerGroup>
              <ImageOverlay
                url="mav_logo.png"
                bounds={kisvarda_harmasut}
                opacity={0.3}
                zIndex={10}
              />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Főteret átfedő poligon">
            <LayerGroup>
              <Polygon pathOptions={{ color: "black", fillColor: "black" }} positions={foter} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Városi Sportcsarnokot átfedő poligon">
            <LayerGroup>
              <Polygon pathOptions={{ color: "orange", fillColor: "orange" }} positions={varosiSportcsarnok} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Szent Damján Görögkatolikus Kórház útvonala Kisvárda vasútállomástól kiindulva">
            <LayerGroup>
              <Polyline pathOptions={{ color: "red", fillColor: "red" }} positions={route} />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Tompos úti lakótelepet lefedő kör">
            <LayerGroup>
              <Circle
                center={[48.222212859829085, 22.082576399485134]}
                radius={250}
                pathOptions={{ color: "blue" }}
              />
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Krúdy parkot jelölő téglalap">
            <LayerGroup>
              <Rectangle bounds={krudyPark} pathOptions={{ color: "cyan" , fillColor: "cyan" }} />
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}

export default Mapping;
