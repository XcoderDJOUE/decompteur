function nbYear(days=0){
  var years, month, day;
  years = days/365;
  month = ((days % 365)/30);
  day = ((days % 365) % 30);
    var retu = {'days': Math.floor(day), 'month': Math.floor(month), 'years': Math.floor(years), 'hours': 0, 'minute':0, 'seconde':0};
    return retu;
}


function dayDiff(d1, d2)
{
  var d1nj = d1, d2nj =d2;
  d1mils = d1.getTime();
  d2mils = d2.getTime();
  d1 = d1mils / 86400000;
  d2 = d2mils / 86400000;
  var dso = new Date().getTime();
  var d3 = dso / 86400000;
  if(d2 > d1 && (d3 >= d1 && d3 > d2)){
       return {success : {days: -1 ,month: -1 ,years: -1 ,hours: -1 ,minute: -1 ,seconde: -1}} ;
  }
    if(d2 > d1 && (d3 >= d1 && d3 <= d2)){
      var nJ = decompte(d1nj, d2nj);
      var ret = nbYear(new Number(nJ.jours).toFixed(0));  
      if( ret ){
          ret.hours = nJ.heure;
          ret.minute = nJ.minute;
          ret.seconde = nJ.seconde;
          return ret;
      }else{
          return  {days: 0 ,month: 0 ,years: 0 ,hours: 0 ,minute: 0 ,seconde: 0} ;
      }

}else{
          return  {days: 0 ,month: 0 ,years: 0 ,hours: 0 ,minute: 0 ,seconde: 0} ;

}
}
 
 function luncher(todaypp, oldDate){
   setInterval(()=>{
     
      var retour  = dayDiff(todaypp, oldDate);
      if(!retour.success){
          $('#decompt').html(retour.hours+' : '+retour.minute+' : '+retour.seconde );
      }else{
         // return  {days: 0 ,month: 0 ,years: 0 ,hours: 0 ,minute: 0 ,seconde: 0} ;
          $('#red').show(1000);
        // windows.location.href="#";
      }
      
      }, 1000);
 }
function decompte(date_deb, cible) {
var mms_jour = 24 * 60 * 60 * 1000;
var mms_heure = 60 * 60 * 1000;
var mms_minute = 60 * 1000;
var mms_seconde = 1000;
var aujourdhui = new Date();
var change_j = -1;
var change_h = -1;
var change_m = -1;
var diff_mms = cible.getTime() - aujourdhui.getTime();
diff_jours = Math.floor(diff_mms / mms_jour);
diff_mms -= diff_jours * mms_jour;
diff_heures = Math.floor(diff_mms / mms_heure);
diff_mms -= diff_heures * mms_heure;
diff_minutes = Math.floor(diff_mms / mms_minute);
diff_mms -= diff_minutes * mms_minute;
var diff_secondes = Math.floor(diff_mms / mms_seconde);
return {'jours': diff_jours, 'heure': diff_heures, 'minute': diff_minutes, 'seconde': diff_secondes};
}
var todaypp = new Date('07/01/2020 12:30:50');
var oldDate = new Date('07/02/2020 11:00:50');
console.log(luncher(todaypp, oldDate));
