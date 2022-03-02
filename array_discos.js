var metodoListadoCanciones = function (){
    let listaDeCanciones = "";
    this.canciones.forEach(function(unaCancion, posicion){
        listaDeCanciones = listaDeCanciones + `<div class="unaSola">
        <p>${unaCancion.posicion+1}</p>
        
        <p class="creo">${unaCancion.nombre}</p>
        
        <p>${unaCancion.duracion}</p>
        </div>`
    })
    return listaDeCanciones
}

var data = [
{
    id: 0,
    portada: "01-solo.jpeg",
    titulo: "1- Sólo de noche",
    ano: 1999,
    canciones: [
        {
        nombre: "Déjame Bailar",
        duracion: "3:24",
        link: `https://open.spotify.com/track/4Tgh6109tHAxLajAtB51Hq?si=AdJsWEPiRsWhJukwJRVdmg`,
        },
        {
        nombre: "Nada para ver",
        duracion: "3:56",
        link: `https://open.spotify.com/track/0jAfgEEDAvmapsX7BqUtwq?si=AchE7yftSAeRkNepjRMWcQ`,
        },
        {
        nombre: "Nadie duerme",
        duracion: "1:54",
        link: `https://open.spotify.com/track/6KdWVvrEqgCXVMGykFsgha?si=C6xtyBNJQki3LQwa_DNbAQ`,
        },
        {
        nombre: "Yrigoyen",
        duracion: "3:21",
        link: `https://open.spotify.com/track/4UFeY4caDvE3hKpsX1yscj?si=lzhdCkAUQei7pd-TYO6A5A`,
        },
        {
        nombre: "Llévame contigo",
        duracion: "3:13",
        link: `https://open.spotify.com/track/4bkrRQjpCv3YwkhG3JQBW5?si=BXh1zdwATD-v9IG-N_u3yg`,
        },
        {
        nombre: "No era cierto",
        duracion: "3:33",
        link: `https://open.spotify.com/track/76vGhyoAG0q5Yr6DU00IK6?si=5sDiwJ8sRK-jWiZoSI7z-w`,
        },
        {
        nombre: "Quemala",
        duracion: "3:09",
        link: `https://open.spotify.com/track/6AsMEPprWdEwFxi0epLvut?si=zMMraysCRjueflp-wDNJgg`,
        },
        {
        nombre: "Yalala la la mmm",
        duracion: "3:17",
        link: `https://open.spotify.com/track/5erpzZKD1plltrfmK98h73?si=H1US-K1rTSWAALEVm3r-tw`,
        },
        {
        nombre: "La ciudad de los pibes sin calma",
        duracion: "3:35",
        link: `https://open.spotify.com/track/653kYN1IjtG21D6fh9wQkM?si=MjN_5mxdRvSo6mhXWgzBEQ`,
        },
        {
        nombre: "Vía volvé",
        duracion: "2:55",
        link: `https://open.spotify.com/track/2QVZNJ6oMlN6idKwcvHWKQ?si=P3dA3o74TsCApchSYFCkEw`,
        },
        {
        nombre: "Solo de día",
        duracion: "2:47",
        link: `https://open.spotify.com/track/5HHhlLDIAiVz8lIXQGgSAV?si=nbOrc-Y_Tja9fFvF-jtjMQ`,
        },
        {
        nombre: "A la villa",
        duracion: "0:33",
        link: `https://open.spotify.com/track/5UT0DlOLio4PfopuFKKeo7?si=BevgZpUvQais7cMn9981wA`,
        },
        {
        nombre: "No se les da",
        duracion: "3:08",
        link: `https://open.spotify.com/track/5N6barTGXRmskwIlhSVdRX?si=Bk6ErXicTECViQdaveDNFQ`,
        },
        {
        nombre: "Cosa linda",
        duracion: "4:56",
        link: `https://open.spotify.com/track/53hWe2uvQI97ICCLG4YBgq?si=H6PPlCd-RSq5G7yWnqtKQg`,
        },
        ],
        listarCanciones: metodoListadoCanciones,
        spotify: `https://open.spotify.com/album/1yicftd2qbmuKvHlhZwWcO?si=hE8JYxe-TE2n7Tah1apCEw`,
    },
    {
    id: 1,
    portada: "02-fuerteviento.jpeg",
    titulo: "2- Este fuerte viento que sopla",
    ano: 2002,
    canciones: [
        {
        nombre: "Como brillaba tu alma",
        duracion: "4:06",
        link: `https://open.spotify.com/track/1VYnzWl5jPECipIsbIHYbs?si=ZTLCvdcHQyai2VaTPlmkVA`,
        },
        {
        nombre: "Tenés que saltar",
        duracion: "4:56",
        link: `https://open.spotify.com/track/4Tgh6109tHAxLajAtB51Hq?si=AdJsWEPiRsWhJukwJRVdmg`,
        },
        {
        nombre: "La única voz",
        duracion: "5:21",
        link: `https://open.spotify.com/track/3UEs83vjOBXpzGUzCozijk?si=v0w-gB2VTpigkpfmfeZMcg`,
        },
        {
        nombre: "Machete",
        duracion: "3:46",
        link: `https://open.spotify.com/track/3JlDOfxxN3039uwyiC1kHf?si=pOptVEOBQMGt_b1lkiJdAQ`,
        },
        {
        nombre: "Te voy a llevar",
        duracion: "4:34",
        link: `https://open.spotify.com/track/4WOwHySxwon4QhRszoMazm?si=vI_M4oTKS2WRicbTz-tmeA`,
        },
        {
        nombre: "Padre de la patria",
        duracion: "4:36",
        link: `https://open.spotify.com/track/50UjFvMWjjQaMn9PpnZqvx?si=9davWWbrT12071d_cMzv_g`,
        },
        {
        nombre: "Me cuesta creer",
        duracion: "4:33",
        link: `https://open.spotify.com/track/67pqYhviehS6U1jEJsB3xS?si=QbvDYTQiRzKLNqu8MsIW6Q`,
        },
        {
        nombre: "Clara",
        duracion: "4:10",
        link: `https://open.spotify.com/track/4GLqtPto6Ky3FD2J1Hnckw?si=mBnIroBQTS22JujNTuBFYw`,
        },
        {
        nombre: "La soledad",
        duracion: "5:15",
        link: `https://open.spotify.com/track/3Leaxdal1wAyjdeB6zm3W7?si=6jPPpvlnQ6-Yt8rFIGp6sw`,
        },
        {
        nombre: "No hay dolor",
        duracion: "4:52",
        link: `https://open.spotify.com/track/7LokOPBsiWu9GWVsVEfEU4?si=lgyJbrpITyWmwEuz1-4Cgw`,
        },
        {
        nombre: "Te quiero más",
        duracion: "2:12",
        link: `https://open.spotify.com/track/59aBA6cVWC7KRbGW9BpnG8?si=CjWCdt3WQ4-dhQitR9P_9w`,
        },
        {
        nombre: "Mucho más feliz",
        duracion: "2:45",
        link: `https://open.spotify.com/track/69VNXEwEr8reXOYyYwSwEe?si=cI2vT6XsSKC0OdzcdSkeHg`,
        },
        {
        nombre: "Más mejor",
        duracion: "3:21",
        link: `https://open.spotify.com/track/7sYEhF8RMvCGZmsjhIF1Sq?si=U_jXqEypREGnwZwZEc9pjQ`,
        },
        {
        nombre: "No necesito nada",
        duracion: "4:24",
        link: `https://open.spotify.com/track/5A44iIZenvd56WXWCO9K5K?si=kpJwsAehRgeTtYSr2Zo6Tg`,
        },
        ],
        listarCanciones: metodoListadoCanciones,
        spotify: `https://open.spotify.com/album/6HyHimLPwJgAVkpH7fc8gb?si=SK6f3pI-TPunHV_6Z5XoDw`,
    },
    {
    id: 2,
    portada: "03-aunquecueste.jpeg",
    titulo: "3- Aunque cueste ver el sol",
    ano: 2004,
    canciones: [
        {
        nombre: "Solo",
        duracion: "4:37",
        link: `https://open.spotify.com/track/3rXoWxsMio584b52q3PYZn?si=mvGktS2CR7CCl33vLJYzFg`,
        },
        {
        nombre: "No te quiero acá",
        duracion: "3:34",
        link: `https://open.spotify.com/track/4WjusPB7o16IVXU6CMrNnY?si=UOwtZdz9RwSbhlaHi_bTYw`,
        },
        {
        nombre: "Verte reír",
        duracion: "4:26",
        link: `https://open.spotify.com/track/6StWP4Tvs8Ci6QOCIDefYk?si=gdzOoLwlRaukVhk-XmTXXw`,
        },
        {
        nombre: "Ya entendí",
        duracion: "4:06",
        link: `https://open.spotify.com/track/2tzubEkAwMucva4Fb4XHfb?si=-p08RYgfRhKGVBbIujsx0w`,
        },
        {
        nombre: "Al vacío",
        duracion: "4:23",
        link: `https://open.spotify.com/track/2Et0SWz6wuSONAROBvCY71?si=SaQ8sEVUSjyBFzFTPTCwcg`,
        },
        {
        nombre: "Cielo de un solo color",
        duracion: "4:04",
        link: `https://open.spotify.com/track/0KQQimYTGg3Rc1bISoSuXl?si=Fwd861IiTaOga2Up1_Gx2g`,
        },
        {
        nombre: "Reevolución",
        duracion: "5:11",
        link: `https://open.spotify.com/track/7pQdlT3VohCh17BdHm905N?si=IPaqIF_-TDi4p0rnUd4cgA`,
        },
        {
        nombre: "Difícil",
        duracion: "4:22",
        link: `https://open.spotify.com/track/666IOtbMT4cvk50CTBR5R5?si=1yUz66oGQayom8g1wdkqng`,
        },
        {
        nombre: "Voces del tiempo",
        duracion: "4:20",
        link: `https://open.spotify.com/track/1eEHaocHDwvHYwtSutWzei?si=EcaOdbZZRLKfuLGIFDXqSw`,
        },
        {
        nombre: "Fueron",
        duracion: "3:58",
        link: `https://open.spotify.com/track/6ejbTM8VJTAUGWybnBILvM?si=B2-LblqLQiGpQl0Z9554HA`,
        },
        {
        nombre: "Voy",
        duracion: "4:26",
        link: `https://open.spotify.com/track/2XVMsnUOpuwt2H0fjSBLNR?si=7WP8aYZDTC2U3p3Ko3CfAA`,
        },
        {
        nombre: "Ni uno suelto",
        duracion: "2:48",
        link: `https://open.spotify.com/track/5QlqdryNYsYEhBJmXCDjNZ?si=RXlgkkT0RT2N1BAGPH-dCQ`,
        },
        {
        nombre: "No llegas a mí",
        duracion: "2:42",
        link: `https://open.spotify.com/track/05aYMqgX8bfHAlkY8vY7ca?si=RUS-FSMwSoy89THR8aX_4Q`,
        },
        {
        nombre: "Adiós",
        duracion: "4:21",
        link: `https://open.spotify.com/track/6jnfTatZcimrTnizGMnKSt?si=ZM27rJ8MTCmWYwGXU8r7ug`,
        },
        ],
        listarCanciones: metodoListadoCanciones,
        spotify: `https://open.spotify.com/album/0hIeX3j63GPq4UvoGcA67J?si=rLtT3oaiTMaE50BfN7IllA`,
    },
    {
    id: 3,
    portada: "04-todoinflamable.jpeg",
    titulo: "4- Todo es tan inflamable",
    ano: 2006,
    canciones: [
        {
        nombre: "En la cara",
        duracion: "2:09",
        link: `https://open.spotify.com/track/7wOazgc1MKbCmLS4jcaLMn?si=cZ_7QZ3vTFaXdiGgdKZo_A`,
        },
        {
        nombre: "Fuera de control",
        duracion: "3:31",
        link: `https://open.spotify.com/track/3fzJDGQj2iYWIk2j8XQBcG?si=-78gDXJqSOioUecSoLqwOQ`,
        },
        {
        nombre: "El oficial",
        duracion: "3:34",
        link: `https://open.spotify.com/track/4IR25Z1wqgW4FaRFKVrUn5?si=uLvooDvcQGebhCsHNkSDmA`,
        },
        {
        nombre: "Una triste melodía",
        duracion: "4:08",
        link: `https://open.spotify.com/track/5LIK17LSKJOYoy0C2ylFb2?si=29oFao43R4qlh5yqGfx0ug`,
        },
        {
        nombre: "No lo ves",
        duracion: "3:35",
        link: `https://open.spotify.com/track/6OgtKsMrp9LOSHlG2hJfIm?si=mVpyRgg7SaCsy02jkrTNmQ`,
        },
        {
        nombre: "Pensar",
        duracion: "3:21",
        link: `https://open.spotify.com/track/7fd1ZaHaXKaSADjhhF8wj6?si=Hjdk-XKHS2iHgMMqGxGW-Q`,
        },
        { 
        nombre: "Eskimal",
        duracion: "5:05",
        link: `https://open.spotify.com/track/0z3B3rbgQFa6Uh20RWoDzQ?si=qvnfNI0FQtStelFdBmxeaw`,
        },
        {
        nombre: "Vivir muriendo",
        duracion: "3:45",
        link: `https://open.spotify.com/track/6YcmfxpuizqMmBKGlwXJZg?si=bkA5Drq_R7CzhKaaEAX_BQ`,
        },
        {
        nombre: "Simplemente yo",
        duracion: "4:24",
        link: `https://open.spotify.com/track/61D0HwlLjiJV5bxkUpK7Tl?si=qOKC_2k-Tyis487LJXgT4w`,
        },
        {
        nombre: "Todo el día",
        duracion: "2:30",
        link: `https://open.spotify.com/track/4spdG0hogZGGxk0e1NhVSI?si=a2n0Nm3PQbmdrQmSdgI8gA`,
        },
        {
        nombre: "Ilegal",
        duracion: "3:27",
        link: `https://open.spotify.com/track/42lKiusLslQ2Rnj5DgKZGJ?si=qbqyvQ4RQAqleEGWFmFu2w`,
        },
        {
        nombre: "Tirano",
        duracion: "4:53",
        link: `https://open.spotify.com/track/63cmHNUTNoH6zHCFHZvqNY?si=4lz006QFSGigVH7ElNF_wg`,
        },
        {
        nombre: "Poco",
        duracion: "4:14",
        link: `https://open.spotify.com/track/1szYbiRHtTVKdvB8DT0XcG?si=DxLX9cv5QK6LPGL0Jy7yRg`,
        },
        {
        nombre: "De nada sirve",
        duracion: "3:42",
        link: `https://open.spotify.com/track/7imdaYmeuOHQhpamOiIC0u?si=GLx5QrThSUGmy5WkMwARTg`,
        },
        ],
        listarCanciones: metodoListadoCanciones,
        spotify: `https://open.spotify.com/album/6ravOwkSUm0VPOVfxTNVGw?si=ZuxWwzaJT7qwzL-02ylXMA`,
    },
    {
    id: 4,    
    portada: "05-camino.jpeg",
    titulo: "5- El camino más largo",
    ano: 2008,
    canciones: [
        {
        nombre: "El camino",
        duracion: "5:16",
        link: `https://open.spotify.com/track/6VVpYNAtH1XnH7y9ekF6Bo?si=fL2mFNTlQnyVqZ3gkqvRWw`,
        },
        {
        nombre: "Como si estuviera",
        duracion: "3:52",
        link: `https://open.spotify.com/track/7x9rgqK2aW3SgKmvyF9w5i?si=1jPnVXYpRMKDre0a1ZPR-g`,
        },
        {
        nombre: "Esta plaga",
        duracion: "2:56",
        link: `https://open.spotify.com/track/0CQ09pM80dtwyQ7fG5ofUj?si=eMDDNYetSyqul7lI7KzDzg`,
        },
        { 
        nombre: "Tu nombre",
        duracion: "4:26",
        link: `https://open.spotify.com/track/5EjXkmemfjFpbyp6pUXU1i?si=LoWtJGYSSwSeYgzjZZlXRw`,
        },
        {
        nombre: "El mismo canal",
        duracion: "3:27",
        link: `https://open.spotify.com/track/0nVEPkmZ5BsJIk54m9MmvG?si=tCrl5XhYSpC-2pRk_ueEbA`,
        },
        {
        nombre: "Niño",
        duracion: "3:28",
        link: `https://open.spotify.com/track/64FAFYZihEnuTZyuAf8HCz?si=-aQOZSqHRbi--itBX-6Avw`,
        },
        {
        nombre: "Tan lejos",
        duracion: "5:14",
        link: `https://open.spotify.com/track/2keKOm91oZiwCleOnZZCEf?si=fqGnBsgnRJCyh5IGLArq_w`,
        },
        {
        nombre: "Rata",
        duracion: "2:52",
        link: `https://open.spotify.com/track/7xBDM9MYfE8fEf1chIJz5M?si=rxzlN8OTQvKUz-m7d4LcIQ`,
        },
        {
        nombre: "Solo tu boca",
        duracion: "3:47",
        link: `https://open.spotify.com/track/2rcz9WTpCnZVIDcF43QgmM?si=r1mzbxH1RSy-YoGOEr_0aA`,
        },
        {
        nombre: "Mirarte a los ojos",
        duracion: "2:03",
        link: `https://open.spotify.com/track/4F6i7c49yosTtwE16jWN2g?si=QcELTKmWTI-9GCqB_F7jjg`,
        },
        {
        nombre: "Que sean dos",
        duracion: "4:37",
        link: `https://open.spotify.com/track/6oS4477zhXkSAriurCgpNz?si=aEVW4IO8TNmCk0EZD7E70g`,
        },
        {
        nombre: "Navegar",
        duracion: "3:17",
        link: `https://open.spotify.com/track/1SlgN7CVmeVTiQax3pO8Rv?si=xIpU1YeGQXW1D4VxG3MY2w`,
        },
        {
        nombre: "Te quedás",
        duracion: "4:02",
        link: `https://open.spotify.com/track/2IrfAn7hge4nLgtTVtap0t?si=9Hs3BIkqRDCIhdwVYUlMkQ`,
        },
        ],
        listarCanciones: metodoListadoCanciones,
        spotify: `https://open.spotify.com/album/4CVdy3NWU2b8OJTXnKMa9e?si=gTtRu3wLT6SBtEz0s3E7Pw`,
    },
    {
    id: 5,
    portada: "06-porlomenos.jpeg",
    titulo: "6- Por lo menos hoy",
    ano: 2010,
    canciones: [
        {
        nombre: "Ángel con campera",
        duracion: "4:39",
        link: `https://open.spotify.com/track/2CsXmRPocmIbJ4ldSd9TG2?si=4XDRGKakSDGTmAoYPPbkkg`,
        },
        {
        nombre: "Cero a la izquierda",
        duracion: "4:09",
        link: `https://open.spotify.com/track/7CGiVvNfHaKndva6NQi3rE?si=wEankF4cTCKRcZQ54trmXw`,
        },
        {
        nombre: "Chau",
        duracion: "4:56",
        link: `https://open.spotify.com/track/3iDL7O3rWKyHqSFgzR8f3U?si=uAx-5zIWSAqP7-zlntVM1A`,
        },
        { 
        nombre: "Con el viento",
        duracion: "1:57",
        link: `https://open.spotify.com/track/5H8QrxbC8GWzHYwlD3IPgJ?si=uhgD7mEBSqS35_hXYMVXXA`,
        },
        {
        nombre: "Arde",
        duracion: "4:35",
        link: `https://open.spotify.com/track/1KG1xBjdKQFJgWcPIPKSiN?si=dcdFA19cQDGLenruSnspvg`,
        },
        {
        nombre: "Los indiferentes",
        duracion: "4:50",
        link: `https://open.spotify.com/track/168O2rtz3RZzgvwHcF62OF?si=PWG-8BA9QF21AusG8DfmCg`,
        },
        {
        nombre: "Volar",
        duracion: "5:23",
        link: `https://open.spotify.com/track/3YHd5Zt1MmXsq3winIun0M?si=m_IoMYcYQVSZE37ISHIOqg`,
        },
        {
        nombre: "Tu defecto es el mío",
        duracion: "3:05",
        link: `https://open.spotify.com/track/6rXJVwmsguYSzrxu9A4Jw4?si=OwBI9Y7STmWp_HUcB7_2Ig`,
        },
        {
        nombre: "Memorias del olvido",
        duracion: "4:57",
        link: `https://open.spotify.com/track/4NpqQayi82C1gjSJ2GR3jW?si=gQqnQdiOSrC0xkujE7vpLA`,
        },
        {
        nombre: "Con la misma vara",
        duracion: "3:29",
        link: `https://open.spotify.com/track/6mlfjOdOVc38ULXCJbg9zo?si=eRP6HYa7RS-UJ-JyGsI6Dw`,
        },
        {
        nombre: "Nunca más a mi lado",
        duracion: "3:31",
        link: `https://open.spotify.com/track/2OHlvTcI2MEcSjOGW1SFKg?si=8HkuqdDRSKOUxg91Ihx7jg`,
        },
        {
        nombre: "El equilibrista",
        duracion: "5:31",
        link: `https://open.spotify.com/track/3xkKscOTQBNCrvIdl410Rg?si=m4BBPFg8SPqzmAXvyLn5ug`,
        },
        ],
        listarCanciones: metodoListadoCanciones,
        spotify: `https://open.spotify.com/album/4ruCVPgw8ly1MvXR7GNtVA?si=0R-oYOI9QqqJuADFg6HTSQ`,
    }, 
    {
    id: 6,
    portada: "07-elcalorinvierno.jpg",
    titulo: "7- El calor del pleno invierno",
    ano: 2012,
    canciones: [
        {
        nombre: "Sin pena ni gloria",
        duracion: "3:20",
        link: `https://open.spotify.com/track/3p8zUtEmcdQCqt4i4K2Q4L?si=A93S1LIrRNuXb-SEKTDAyg`,
        },
        {
        nombre: "Nada fue en vano",
        duracion: "3:49",
        link: `https://open.spotify.com/track/1bediAHf7QmDNXn9L716sr?si=cVcQB7s5S9ClYBUlTGl0Yw`,
        },
        {
        nombre: "A las nueve",
        duracion: "3:27",
        link: `https://open.spotify.com/track/73QctH20bRuLGCj8OM8lHk?si=WD3cwd-nSGihyrh3FUVWuw`,
        },
        { 
        nombre: "Mil días",
        duracion: "3:25",
        link: `https://open.spotify.com/track/4ZLhmfxIuAV4afyHTMlPAp?si=Hl63FPofQuCf41qcZKefhw`,
        },
        {
        nombre: "Ese maldito momento",
        duracion: "3:05",
        link: `https://open.spotify.com/track/4YUq9kQhxTsGo5r7b6rd1z?si=IcwS5jAKTTiXPPr1jW41Kg`,
        },
        {
        nombre: "Hijo de las armas",
        duracion: "3:32",
        link: `https://open.spotify.com/track/7eCkBA8QcwNAhNlBZO5eRD?si=zzFbR84_TKa-8mqhZOXMTQ`,
        },
        {
        nombre: "Por el agua",
        duracion: "3:28",
        link: `https://open.spotify.com/track/1UBNTTZ8HP595frPt29U20?si=O1psolCNS6Grj6EdQG2fkQ`,
        },
        {
        nombre: "Religión pagana",
        duracion: "4:07",
        link: `https://open.spotify.com/track/4952HHS3pGOyWEinAOfqkn?si=edasEcx9TRuD8pEWsEjQHw`,
        },
        {
        nombre: "Destierro",
        duracion: "2:20",
        link: `https://open.spotify.com/track/5yFeXQT4aMDvKHm9NXK2HH?si=KqopQn6zRwuV0USUBAAPyw`,
        },
        {
        nombre: "El error",
        duracion: "4:02",
        link: `https://open.spotify.com/track/0KW21rO3vrUtbOAoas4ytq?si=o3YkzvJIS4Wck6mBl6S_Xw`,
        },
        {
        nombre: "Desde hace un sueño",
        duracion: "4:35",
        link: `https://open.spotify.com/track/4IKhy8OsqpG3HM104Rs1sk?si=8nos6QbESiuS-k3zXy1T5w`,
        },
        {
        nombre: "El último jefe",
        duracion: "3:03",
        link: `https://open.spotify.com/track/0pIjJyM4SGiH8O8sUx53DS?si=EJX1tievQiieiMRQubZaiw`,
        },
        {
        nombre: "Hasta nunca",
        duracion: "3:36",
        link: `https://open.spotify.com/track/29i5Ji9Rdn9YA7JVE5Ycub?si=UWDHw2xPRA-ek0mBuAUShA`,
        },
        ],
        listarCanciones: metodoListadoCanciones,
        spotify: `https://open.spotify.com/album/5owuXYMZ8AEcSFKDYFZT3c?si=Pvy6KZfyQTeR_1MGPy9HIg`,
    },    
    {
    id: 7,
    portada: "08-eltiempoavanza.jpeg",
    titulo: "8- El tiempo otra vez avanza",
    ano: 2014,
    canciones: [
        {
        nombre: "Me ilumina hoy",
        duracion: "3:18",
        link: `https://open.spotify.com/track/39zX4P0m48O6DvnSfK1CmR?si=hDEjlgkXQ8KN5ezqIzK9rg`,
        },
        {
        nombre: "Alba",
        duracion: "3:36",
        link: `https://open.spotify.com/track/5dTyP5AZcJrW99D9SDcO7z?si=WWd_ut8zSlabRuTrz7BiCw`,
        },
        {
        nombre: "Detrás del cerro",
        duracion: "3:44",
        link: `https://open.spotify.com/track/42YWxgZV4SaRyfBlfMvBEe?si=6A_bJWSWRUCTyQaeCOVD0w`,
        },
        { 
        nombre: "Comodín",
        duracion: "2:49",
        link: `https://open.spotify.com/track/4eGPbNiOlLvakizxVUBx7t?si=bO52jqmXQvWKWQQF1LmgkQ`,
        },
        {
        nombre: "Paranoia",
        duracion: "3:38",
        link: `https://open.spotify.com/track/6oDH9ub0s6qAfQQc4lBbqp?si=xqL-gTU-TXGTpZQcDdb07w`,
        },
        {
        nombre: "Mi demente",
        duracion: "4:06",
        link: `https://open.spotify.com/track/5vouQvhN2xpFa2Fc9qdBHZ?si=OUaDw79pSxOlvc9h5ZMe3w`,
        },
        {
        nombre: "La cuerda",
        duracion: "3:57",
        link: `https://open.spotify.com/track/6o7tf4MbE6mHSHRhUOFYXY?si=MDy5cMo4RA63qZ_a8IE8Ww`,
        },
        {
        nombre: "La puerta de atrás",
        duracion: "3:59",
        link: `https://open.spotify.com/track/43vAvC12ZJ4GshnmRiKcFg?si=3CwATlknSsuNMN6JOcq3cQ`,
        },
        {
        nombre: "Presente",
        duracion: "2:48",
        link: `https://open.spotify.com/track/4sOIuBgbG0C13PkmRFSNig?si=dgwSgHt0Rfy6MLP5OuKvmQ`,
        },
        {
        nombre: "Solo vino",
        duracion: "3:33",
        link: `https://open.spotify.com/track/4j5Gd3FikeT1LH845wYx1Y?si=IRDUaRG1T2qmM1J9RhA-2A`,
        },
        {
        nombre: "Su sombrero",
        duracion: "4:04",
        link: `https://open.spotify.com/track/32mHoj7zaPws3x6DqlYmDF?si=mSjJHzFASNadK7wIXuV1Ew`,
        },
        {
        nombre: "Viajando sin espalda",
        duracion: "3:23",
        link: `https://open.spotify.com/track/4WrJu33eDXqn8R4W359jVJ?si=zjOANkZkSfKPd-yRDsadUg`,
        },
        {
        nombre: "Madre nuestra",
        duracion: "3:56",
        link: `https://open.spotify.com/track/77nSxKSKpDI17m3qZtOwJT?si=XbsuitfjQ1GnxAVzrwZxcg`,
        },
        {
        nombre: "Llueve tranquilo",
        duracion: "4:40",
        link: `https://open.spotify.com/track/5CzZ6Dg9BgvRv64u5SeuXV?si=abYKbiCaQ5OXPFPIVdrBGw`,
        },
        ],
        listarCanciones: metodoListadoCanciones,
        spotify: `https://open.spotify.com/album/3lNVPKQyklgpu4vR3w6eyu?si=eyC4PeWCQ0udVov5RrDMHQ`,
    },  
    {
    id: 8,
    portada: "09-alarmas.jpeg",
    titulo: "9- Suenan las alarmas",
    ano: 2017,
    canciones: [
        {
        nombre: "Y el mundo me comió a mi",
        duracion: "4:03",
        link: `https://open.spotify.com/track/5w5iSI6HkxJc0LIoqnKz2F?si=cl0kLnOkT62WBaV1RcwdJA`,
        },
        {
        nombre: "Quería ser como él",
        duracion: "3:59",
        link: `https://open.spotify.com/track/3DdP46Vuss3440XG9Y0jN8?si=FzKRrX0GR3SvpXgdbQXBVg`,
        },
        {
        nombre: "Autodestructivo",
        duracion: "3:35",
        link: `https://open.spotify.com/track/0KAtGr0gm1vJzvm8dZZkuz?si=soATWrWNQsW7yV7aKGc-Qg`,
        },
        { 
        nombre: "Guante blanco",
        duracion: "3:06",
        link: `https://open.spotify.com/track/6BjMilXm8ijEO6GjC74y8B?si=0TiyQtMfTIiZ8nTNTUqn0Q`,
        },
        {
        nombre: "Para cuando me muera",
        duracion: "3:47",
        link: `https://open.spotify.com/track/1WvcT7Hox2M09cEGsaM2Ld?si=MUJ8OxmLTSS1CrACNg8OAg`,
        },
        {
        nombre: "Los villanos",
        duracion: "3:27",
        link: `https://open.spotify.com/track/2C2puggkaTbRN9p9C7kcy2?si=5F-F4voqSZ25njBYAtBsuQ`,
        },
        {
        nombre: "Pegame más fuerte",
        duracion: "3:33",
        link: `https://open.spotify.com/track/2VirKyVJYyhpi0GZimO5Ic?si=JQDJdhZWTv-q2TYZG0mVjg`,
        },
        {
        nombre: "Prendido fuego",
        duracion: "4:17",
        link: `https://open.spotify.com/track/0jwRuf0oR6FcDetPlpJ5z6?si=-vYRvzgLShijuars3z3xJQ`,
        },
        {
        nombre: "Viento a favor",
        duracion: "3:24",
        link: `https://open.spotify.com/track/3zlhzRzq1qJ1kO4yaz6kNM?si=pvu3VCtESvu8_Qw3Ush9ow`,
        },
        {
        nombre: "Desde que era un pibe",
        duracion: "4:32",
        link: `https://open.spotify.com/track/6dMnKkGWH4go3fJ6NuuA6S?si=EZzV4j-KTZeiNwjmDUpnRQ`,
        },
        {
        nombre: "Lo real es ya",
        duracion: "3:10",
        link: `https://open.spotify.com/track/5O7RY3V0MHGym35cY4DLPL?si=ncbLJCKGSlymfYUsdb6DGA`,
        },
        {
        nombre: "No deja de sonar",
        duracion: "3:14",
        link: `https://open.spotify.com/track/2a6SwAST8lkrFB2RN3O0bB?si=ODSGq48ySKqvwBgLDBvbJg`,
        },
        ],
        listarCanciones: metodoListadoCanciones,
        spotify: `https://open.spotify.com/album/3X7Bo9RUsckhNUsWoxJ8l9?si=ebc98sT-TReVe88hKe4QRA`,
    },
    {
    id: 9,
    portada: "10-luz.jpeg",
    titulo: "10- Luz",
    ano: 2021,
    canciones: [
        {
        nombre: "La rama",
        duracion: "4:13",
        link: `https://open.spotify.com/track/0JWOMrDJ3oizqvlV1HZd5v?si=14db9ee8e5a54a15`,
        },
        {
        nombre: "Como un animal",
        duracion: "3:49",
        link: `https://open.spotify.com/track/3691SXXGoiESOCS8ldSkDk?si=7f8cc51236884c3c`,
        },
        {
        nombre: "Mi ausencia",
        duracion: "4:32",
        link: `https://open.spotify.com/track/7eLzTUFVJ10tndmSksWwWU?si=160fd377af5e4072`,
        },
        { 
        nombre: "Josefina",
        duracion: "2:40",
        link: `https://open.spotify.com/track/1EmLmTBlskZfF4X2XkEn3P?si=addf0d3e5c674359`,
        },
        {
        nombre: "Venganza",
        duracion: "3:24",
        link: `https://open.spotify.com/track/2UJfYO4NNQSxBq0ElmDNd1?si=sWusPN0BSTK68Ebyo-ZKSw`,
        },
        {
        nombre: "Dejo atrás",
        duracion: "3:41",
        link: `https://open.spotify.com/track/5HeBWLzH3AI28axfL2lVYP?si=1UdtiKbTRXeMloMmL7fmDA`,
        },
        {
        nombre: "No te imaginas",
        duracion: "3:31",
        link: `https://open.spotify.com/track/7x00uv5aDR0MA8eIk7xAuf?si=fmaIQjg2TBWjKuSZe-D1JQ`,
        },
        {
        nombre: "Mejor callar",
        duracion: "3:35",
        link: `https://open.spotify.com/track/5eWPf8IUMtKXCtolSh678f?si=clIoajMxTn62bV28B95g1A`,
        },
        {
        nombre: "Austro",
        duracion: "4:17",
        link: `https://open.spotify.com/track/4Wtz4dpKRKnWqqQeWb02Q5?si=APRuN37VQv2Smn1QEwMAzw`,
        },
        {
        nombre: "Debí",
        duracion: "3:03",
        link: `https://open.spotify.com/track/4PVgF4ytngXkw9SZpbEkGC?si=jTbMOx2DS0SDED60zZO-FA`,
        },
        {
        nombre: "Con las ganas",
        duracion: "3:44",
        link: `https://open.spotify.com/track/3iMR1iIgkVPSJ0G3XPVYhf?si=PtU0DVGeQlG1JPUROV34Cg`,
        },
        {
        nombre: "Yendo",
        duracion: "4:11",
        link: `https://open.spotify.com/track/66Z2TePlET1rlGMu363B54?si=yxqVth9mTcWl0I15LV6veA`,
        },
        ],
        listarCanciones: metodoListadoCanciones,
        spotify: `https://open.spotify.com/album/4C6joZxFL6lTg6tJDE9N6o?si=DVyKky2jSeKYWx97pDUQ1A`,
    },     
];

var cancionesParaElDia = [data[0]["canciones"][1], data[5]["canciones"][10], data[3]["canciones"][9], data[7]["canciones"][4], data[2]["canciones"][11], data[6]["canciones"][5], data[3]["canciones"][6], data[7]["canciones"][9], data[8]["canciones"][9], data[9]["canciones"][1], data[7]["canciones"][6]];