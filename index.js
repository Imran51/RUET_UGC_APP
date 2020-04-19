var express = require('express');
var bodyparser = require('body-parser');
var ejs = require('ejs');
var mongoose = require('mongoose');
var sessions = require('express-session');

var session;

var app = express();

var port = 5000 || process.env.PORT;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(sessions({
  secret:'jhuhuhhuhuhu766666',
  resave:false,
  saveUninitialized:true
}))
app.set('view engine','ejs');
app.use('/public',express.static('public'));

var db=mongoose.connect('mongodb://selim:selim12@ds133296.mlab.com:33296/ruet');

app.get('/',function(req,res){
  res.render('home');
})

  var eee={};
  var cse={};
  var ete={};
  var ece={};
  var ce={};
  var becm={};
  var urp={};
  var archi={};
  var me={};
  var ipe={};
  var gce={};
  var mte={};
  var cfpe={};
  var mse={};
  var hum={};
  var math={};
  var physics={};
  var chemistry={};
  var educationsection={};
  var commite={};
  var foundationsection={};
  var library={};
  var accountsection={};
  var engineeringsection={};
  var hall={};

app.get('/session',function(req,res){
  if(req.query.session){
  eeeuser.findOne({ _id:req.query.session},function(err,doc){
  if(err) throw err;
   else{
    eee=doc;
   }
  });

  user.findOne({ _id:req.query.session},function(err,doc){
   if(err) throw err;
    else{
     cse=doc;
    }
  });

  eteuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     ete=doc;
    }
  });

  eceuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     ece=doc;
    }
  });

  ceuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     ce=doc;
    }
  });

  becmuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     becm=doc;
    }
  });

  urpuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     urp=doc;
    }
  });

  archiuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     archi=doc;
    }
  });

  meuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     me=doc;
    }
  });

  ipeuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     ipe=doc;
    }
  });

  gceuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     gce=doc;
    }
  });

  mteuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     mte=doc;
    }
  });

  cfpeuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     cfpe=doc;
    }
  });

  mseuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     mse=doc;
    }
  });


   humuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     hum=doc;
    }
  });


  mathuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     math=doc;
    }
  });

  physicsuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     physics=doc;
    }
  });

  chemistryuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     chemistry=doc;
    }
  });

  educationsectionuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     educationsection=doc;
    }
  });

  commiteuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     commite=doc;
    }
  });

  foundationsectionuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     foundationsection=doc;
    }
  });

  libraryuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     library=doc;
    }
  });

  accountsectionuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     accountsection=doc;
    }
  });

  engineeringsectionuser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     engineeringsection=doc;
    }
  });

  halluser.findOne({ _id:req.query.session},function(err,doc){
    if(err) throw err;
    else{
     hall=doc;
    res.render('index',{eeeuser:eee, user:cse, eteuser:ete, eceuser:ece, ceuser:ce, becmuser:becm,
    urpuser:urp, archiuser:archi, meuser:me, ipeuser:ipe, gceuser:gce, mteuser:mte, cfpeuser:cfpe,
    mseuser:mse, mathuser:math, physicsuser:physics, chemistryuser:chemistry, 
    educationsectionuser:educationsection, commiteuser:commite, foundationsectionuser:foundationsection, 
    humuser:hum, libraryuser:library, accountsectionuser:accountsection,
    engineeringsectionuser:engineeringsection, halluser:hall });
  }
  });
}
});

app.get('/cseadmin',function(req,res){
    res.render('cseadmin');
});

app.get('/csedata',function(req,res){
  if(req.query.csesession){
    user.findOne({_id:req.query.csesession},function(err,doc){
    if(err) throw err;
    if(!doc){
     res.send('404 not found');
   }else{
     res.render('csedata',{user:doc});
   }
  });
  }
});

app.post('/cseadmin',function(req,res){
  session=req.session;
  if(req.body.username=='cseadmin' && req.body.password=='cseadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/cse');
})

app.get('/cselogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/cseadmin');
  })
})

app.get('/cse',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('cse');
  }
  else
  {
    res.end('who are you');
  }
});


// define the schema for our user model
var Schema=new mongoose.Schema({
  _id                 :Number,
  csetotalbscstudent  :Number,
  csemalebscstudent   :Number,
  csefemalebscstudent :Number,
  csetotalmscstudent  :Number,
  csemalemscstudent   :Number,
  csefemalemscstudent :Number,
  csetotalmfilstudent :Number,
  csemalemfilstudent  :Number,
  csefemalemfilstudent:Number,
  csetotalphdstudent  :Number,
  csemalephdstudent   :Number,
  csefemalephdstudent :Number,
  cseforeignmalebscstudent   :Number,
  cseforeignfemalebscstudent :Number,
  cseforeignmalemscstudent   :Number,
  cseforeignfemalemscstudent :Number,
  cseforeignmalemfilstudent  :Number,
  cseforeignfemalemfilstudent:Number,
  cseforeignmalephdstudent   :Number,
  cseforeignfemalephdstudent :Number,
  csefulltimemfilmaleteacher  :Number,
  csefulltimemfilfemaleteacher:Number,
  cseparttimemfilmaleteacher  :Number,
  cseparttimemfilfemaleteacher:Number,
  csefulltimephdmaleteacher   :Number,
  csefulltimephdfemaleteacher :Number,
  cseparttimephdmaleteacher   :Number,
  cseparttimephdfemaleteacher :Number,
  csefulltimemscmaleteacher   :Number,
  csefulltimemscfemaleteacher :Number,
  cseparttimemscmaleteacher   :Number,
  cseparttimemscfemaleteacher :Number,
  csefulltimebscmaleteacher   :Number,
  csefulltimebsefemaleteacher :Number,
  cseparttimebscmaleteacher   :Number,
  cseparttimebscfemaleteacher :Number,
  csefulltimeothermaleteacher :Number,
  csefulltimeotherfemaleteacher:Number,
  cseparttimeothermaleteacher  :Number,
  cseparttimeotherfemaleteacher:Number,
  cseresearch1  :Number,
  cseresearch2  :Number,
  cseresearch3  :Number,
  cseresearch4  :Number,
  cseresearch5  :Number,
  cseresearch6  :Number,
  csejournal    :Number,
  cseconference :Number,
  cseresearch8  :Number,
  cseresearch9  :Number,
  cseresearch10 :Number
});

var user=mongoose.model('cse',Schema);


app.post('/new',function(req,res){
  new user({
  _id                 :req.body.session,
  csetotalbscstudent  :req.body.csetotalbscstudent,
  csemalebscstudent   :req.body.csemalebscstudent,
  csefemalebscstudent :req.body.csefemalebscstudent,
  csetotalmscstudent  :req.body.csetotalmscstudent,
  csemalemscstudent   :req.body.csemalemscstudent,
  csefemalemscstudent :req.body.csefemalemscstudent,
  csetotalmfilstudent :req.body.csetotalmfilstudent,
  csemalemfilstudent  :req.body.csemalemfilstudent,
  csefemalemfilstudent:req.body.csefemalemfilstudent,
  csetotalphdstudent  :req.body.csetotalphdstudent,
  csemalephdstudent   :req.body.csemalephdstudent,
  csefemalephdstudent :req.body.csefemalephdstudent,
  cseforeignmalebscstudent   :req.body.cseforeignmalebscstudent,
  cseforeignfemalebscstudent :req.body.cseforeignfemalebscstudent,
  cseforeignmalemscstudent   :req.body.cseforeignmalemscstudent,
  cseforeignfemalemscstudent :req.body.cseforeignfemalemscstudent,
  cseforeignmalemfilstudent  :req.body.cseforeignmalemfilstudent,
  cseforeignfemalemfilstudent:req.body.cseforeignfemalemfilstudent,
  cseforeignmalephdstudent   :req.body.cseforeignmalephdstudent,
  cseforeignfemalephdstudent :req.body.cseforeignfemalephdstudent,
  csefulltimemfilmaleteacher  :req.body.csefulltimemfilmaleteacher,
  csefulltimemfilfemaleteacher:req.body.csefulltimemfilfemaleteacher,
  cseparttimemfilmaleteacher  :req.body.cseparttimemfilmaleteacher,
  cseparttimemfilfemaleteacher:req.body.cseparttimemfilfemaleteacher,
  csefulltimephdmaleteacher   :req.body.csefulltimephdmaleteacher,
  csefulltimephdfemaleteacher :req.body.csefulltimephdfemaleteacher,
  cseparttimephdmaleteacher   :req.body.cseparttimephdmaleteacher,
  cseparttimephdfemaleteacher :req.body.cseparttimephdfemaleteacher,
  csefulltimemscmaleteacher   :req.body.csefulltimemscmaleteacher,
  csefulltimemscfemaleteacher :req.body.csefulltimemscfemaleteacher,
  cseparttimemscmaleteacher   :req.body.cseparttimemscmaleteacher,
  cseparttimemscfemaleteacher :req.body.cseparttimemscfemaleteacher,
  csefulltimebscmaleteacher   :req.body.csefulltimebscmaleteacher,
  csefulltimebsefemaleteacher :req.body.csefulltimebsefemaleteacher,
  cseparttimebscmaleteacher   :req.body.cseparttimebscmaleteacher,
  cseparttimebscfemaleteacher :req.body.cseparttimebscfemaleteacher,
  csefulltimeothermaleteacher :req.body.csefulltimeothermaleteacher,
  csefulltimeotherfemaleteacher:req.body.csefulltimeotherfemaleteacher,
  cseparttimeothermaleteacher  :req.body.cseparttimeothermaleteacher,
  cseparttimeotherfemaleteacher:req.body.cseparttimeotherfemaleteacher,
  cseresearch1  :req.body.cseresearch1,
  cseresearch2  :req.body.cseresearch2,
  cseresearch3  :req.body.cseresearch3,
  cseresearch4  :req.body.cseresearch4,
  cseresearch5  :req.body.cseresearch5,
  cseresearch6  :req.body.cseresearch6,
  csejournal    :req.body.csejournal,
  cseconference :req.body.cseconference,
  cseresearch8  :req.body.cseresearch8,
  cseresearch9  :req.body.cseresearch9,
  cseresearch10 :req.body.cseresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('csedata',{user:doc});
  });
});


app.param('id',function(req,res,next,id){
  user.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.userId=doc;
        next();
      }
  });
});

app.get('/user/:id/edit',function(req,res){
  res.render('csedataupdate',{user:req.userId});
});

// for updating data
app.post('/user/:id', function(req, res){
  user.updateOne({_id: req.params.id},
    { $set:{
  csetotalbscstudent  :req.body.csetotalbscstudent,
  csemalebscstudent   :req.body.csemalebscstudent,
  csefemalebscstudent :req.body.csefemalebscstudent,
  csetotalmscstudent  :req.body.csetotalmscstudent,
  csemalemscstudent   :req.body.csemalemscstudent,
  csefemalemscstudent :req.body.csefemalemscstudent,
  csetotalmfilstudent :req.body.csetotalmfilstudent,
  csemalemfilstudent  :req.body.csemalemfilstudent,
  csefemalemfilstudent:req.body.csefemalemfilstudent,
  csetotalphdstudent  :req.body.csetotalphdstudent,
  csemalephdstudent   :req.body.csemalephdstudent,
  csefemalephdstudent :req.body.csefemalephdstudent,
  cseforeignmalebscstudent   :req.body.cseforeignmalebscstudent,
  cseforeignfemalebscstudent :req.body.cseforeignfemalebscstudent,
  cseforeignmalemscstudent   :req.body.cseforeignmalemscstudent,
  cseforeignfemalemscstudent :req.body.cseforeignfemalemscstudent,
  cseforeignmalemfilstudent  :req.body.cseforeignmalemfilstudent,
  cseforeignfemalemfilstudent:req.body.cseforeignfemalemfilstudent,
  cseforeignmalephdstudent   :req.body.cseforeignmalephdstudent,
  cseforeignfemalephdstudent :req.body.cseforeignfemalephdstudent,
  csefulltimemfilmaleteacher  :req.body.csefulltimemfilmaleteacher,
  csefulltimemfilfemaleteacher:req.body.csefulltimemfilfemaleteacher,
  cseparttimemfilmaleteacher  :req.body.cseparttimemfilmaleteacher,
  cseparttimemfilfemaleteacher:req.body.cseparttimemfilfemaleteacher,
  csefulltimephdmaleteacher   :req.body.csefulltimephdmaleteacher,
  csefulltimephdfemaleteacher :req.body.csefulltimephdfemaleteacher,
  cseparttimephdmaleteacher   :req.body.cseparttimephdmaleteacher,
  cseparttimephdfemaleteacher :req.body.cseparttimephdfemaleteacher,
  csefulltimemscmaleteacher   :req.body.csefulltimemscmaleteacher,
  csefulltimemscfemaleteacher :req.body.csefulltimemscfemaleteacher,
  cseparttimemscmaleteacher   :req.body.cseparttimemscmaleteacher,
  cseparttimemscfemaleteacher :req.body.cseparttimemscfemaleteacher,
  csefulltimebscmaleteacher   :req.body.csefulltimebscmaleteacher,
  csefulltimebsefemaleteacher :req.body.csefulltimebsefemaleteacher,
  cseparttimebscmaleteacher   :req.body.cseparttimebscmaleteacher,
  cseparttimebscfemaleteacher :req.body.cseparttimebscfemaleteacher,
  csefulltimeothermaleteacher :req.body.csefulltimeothermaleteacher,
  csefulltimeotherfemaleteacher:req.body.csefulltimeotherfemaleteacher,
  cseparttimeothermaleteacher  :req.body.cseparttimeothermaleteacher,
  cseparttimeotherfemaleteacher:req.body.cseparttimeotherfemaleteacher,
  cseresearch1  :req.body.cseresearch1,
  cseresearch2  :req.body.cseresearch2,
  cseresearch3  :req.body.cseresearch3,
  cseresearch4  :req.body.cseresearch4,
  cseresearch5  :req.body.cseresearch5,
  cseresearch6  :req.body.cseresearch6,
  csejournal    :req.body.csejournal,
  cseconference :req.body.cseconference,
  cseresearch8  :req.body.cseresearch8,
  cseresearch9  :req.body.cseresearch9,
  cseresearch10 :req.body.cseresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/user/'+req.params.id);
          }
        });
});

// to show the view page
app.get('/user/:id',function(req,res){
  res.render('csedata',{user:req.userId});
});

app.get('/user/:id/delete', function(req,res){
  user.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/cse');
  });
});



app.get('/eeeadmin',function(req,res){
    res.render('eeeadmin');
});


app.get('/eeedata',function(req,res){
  if(req.query.eeesession){
    eeeuser.findOne({_id:req.query.eeesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }
    else{
     res.render('eeedata',{eeeuser:doc});
    }
  });
  }
});

app.post('/eeeadmin',function(req,res){
  session=req.session;
  if(req.body.username=='eeeadmin' && req.body.password=='eeeadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/eee');
})

app.get('/eeelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/eeeadmin');
  })
})

app.get('/eee',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('eee');
  }
  else
  {
    res.end('who are you');
  }
});


var eeeSchema=new mongoose.Schema({
  _id                 :Number,
  eeetotalbscstudent  :Number,
  eeemalebscstudent   :Number,
  eeefemalebscstudent :Number,
  eeetotalmscstudent  :Number,
  eeemalemscstudent   :Number,
  eeefemalemscstudent :Number,
  eeetotalmfilstudent :Number,
  eeemalemfilstudent  :Number,
  eeefemalemfilstudent:Number,
  eeetotalphdstudent  :Number,
  eeemalephdstudent   :Number,
  eeefemalephdstudent :Number,
  eeeforeignmalebscstudent   :Number,
  eeeforeignfemalebscstudent :Number,
  eeeforeignmalemscstudent   :Number,
  eeeforeignfemalemscstudent :Number,
  eeeforeignmalemfilstudent  :Number,
  eeeforeignfemalemfilstudent:Number,
  eeeforeignmalephdstudent   :Number,
  eeeforeignfemalephdstudent :Number,
  eeefulltimemfilmaleteacher  :Number,
  eeefulltimemfilfemaleteacher:Number,
  eeeparttimemfilmaleteacher  :Number,
  eeeparttimemfilfemaleteacher:Number,
  eeefulltimephdmaleteacher   :Number,
  eeefulltimephdfemaleteacher :Number,
  eeeparttimephdmaleteacher   :Number,
  eeeparttimephdfemaleteacher :Number,
  eeefulltimemscmaleteacher   :Number,
  eeefulltimemscfemaleteacher :Number,
  eeeparttimemscmaleteacher   :Number,
  eeeparttimemscfemaleteacher :Number,
  eeefulltimebscmaleteacher   :Number,
  eeefulltimebscfemaleteacher :Number,
  eeeparttimebscmaleteacher   :Number,
  eeeparttimebscfemaleteacher :Number,
  eeefulltimeothermaleteacher :Number,
  eeefulltimeotherfemaleteacher:Number,
  eeeparttimeothermaleteacher  :Number,
  eeeparttimeotherfemaleteacher:Number,
  eeeresearch1  :Number,
  eeeresearch2  :Number,
  eeeresearch3  :Number,
  eeeresearch4  :Number,
  eeeresearch5  :Number,
  eeeresearch6  :Number,
  eeejournal    :Number,
  eeeconference :Number,
  eeeresearch8  :Number,
  eeeresearch9  :Number,
  eeeresearch10 :Number
});

var eeeuser=mongoose.model('eee',eeeSchema);

app.post('/eeenew',function(req,res){
	new eeeuser({
  _id                 :req.body.session,
  eeetotalbscstudent  :req.body.eeetotalbscstudent,
  eeemalebscstudent   :req.body.eeemalebscstudent,
  eeefemalebscstudent :req.body.eeefemalebscstudent,
  eeetotalmscstudent  :req.body.eeetotalmscstudent,
  eeemalemscstudent   :req.body.eeemalemscstudent,
  eeefemalemscstudent :req.body.eeefemalemscstudent,
  eeetotalmfilstudent :req.body.eeetotalmfilstudent,
  eeemalemfilstudent  :req.body.eeemalemfilstudent,
  eeefemalemfilstudent:req.body.eeefemalemfilstudent,
  eeetotalphdstudent  :req.body.eeetotalphdstudent,
  eeemalephdstudent   :req.body.eeemalephdstudent,
  eeefemalephdstudent :req.body.eeefemalephdstudent,
  eeeforeignmalebscstudent   :req.body.eeeforeignmalebscstudent,
  eeeforeignfemalebscstudent :req.body.eeeforeignfemalebscstudent,
  eeeforeignmalemscstudent   :req.body.eeeforeignmalemscstudent,
  eeeforeignfemalemscstudent :req.body.eeeforeignfemalemscstudent,
  eeeforeignmalemfilstudent  :req.body.eeeforeignmalemfilstudent,
  eeeforeignfemalemfilstudent:req.body.eeeforeignfemalemfilstudent,
  eeeforeignmalephdstudent   :req.body.eeeforeignmalephdstudent,
  eeeforeignfemalephdstudent :req.body.eeeforeignfemalephdstudent,
  eeefulltimemfilmaleteacher  :req.body.eeefulltimemfilmaleteacher,
  eeefulltimemfilfemaleteacher:req.body.eeefulltimemfilfemaleteacher,
  eeeparttimemfilmaleteacher  :req.body.eeeparttimemfilmaleteacher,
  eeeparttimemfilfemaleteacher:req.body.eeeparttimemfilfemaleteacher,
  eeefulltimephdmaleteacher   :req.body.eeefulltimephdmaleteacher,
  eeefulltimephdfemaleteacher :req.body.eeefulltimephdfemaleteacher,
  eeeparttimephdmaleteacher   :req.body.eeeparttimephdmaleteacher,
  eeeparttimephdfemaleteacher :req.body.eeeparttimephdfemaleteacher,
  eeefulltimemscmaleteacher   :req.body.eeefulltimemscmaleteacher,
  eeefulltimemscfemaleteacher :req.body.eeefulltimemscfemaleteacher,
  eeeparttimemscmaleteacher   :req.body.eeeparttimemscmaleteacher,
  eeeparttimemscfemaleteacher :req.body.eeeparttimemscfemaleteacher,
  eeefulltimebscmaleteacher   :req.body.eeefulltimebscmaleteacher,
  eeefulltimebscfemaleteacher :req.body.eeefulltimebscfemaleteacher,
  eeeparttimebscmaleteacher   :req.body.eeeparttimebscmaleteacher,
  eeeparttimebscfemaleteacher :req.body.eeeparttimebscfemaleteacher,
  eeefulltimeothermaleteacher :req.body.eeefulltimeothermaleteacher,
  eeefulltimeotherfemaleteacher:req.body.eeefulltimeotherfemaleteacher,
  eeeparttimeothermaleteacher  :req.body.eeeparttimeothermaleteacher,
  eeeparttimeotherfemaleteacher:req.body.eeeparttimeotherfemaleteacher,
  eeeresearch1  :req.body.eeeresearch1,
  eeeresearch2  :req.body.eeeresearch2,
  eeeresearch3  :req.body.eeeresearch3,
  eeeresearch4  :req.body.eeeresearch4,
  eeeresearch5  :req.body.eeeresearch5,
  eeeresearch6  :req.body.eeeresearch6,
  eeejournal    :req.body.eeejournal,
  eeeconference :req.body.eeeconference,
  eeeresearch8  :req.body.eeeresearch8,
  eeeresearch9  :req.body.eeeresearch9,
  eeeresearch9  :req.body.eeeresearch10
	}).save(function(err,doc){
		if(err) res.json(err);
		else
			console.log('data inserted successfully');
		res.render('eeedata',{eeeuser:doc});
	});
});


app.param('id',function(req,res,next,id){
  eeeuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.eeeuserId=doc;
        next();
      }
  });
});

app.get('/eeeuser/:id/edit',function(req,res){
  res.render('eeedataupdate',{eeeuser:req.eeeuserId});
});

// for updating data
app.post('/eeeuser/:id', function(req, res){
  eeeuser.updateOne({_id: req.params.id},
    { $set:{
  eeetotalbscstudent  :req.body.eeetotalbscstudent,
  eeemalebscstudent   :req.body.eeemalebscstudent,
  eeefemalebscstudent :req.body.eeefemalebscstudent,
  eeetotalmscstudent  :req.body.eeetotalmscstudent,
  eeemalemscstudent   :req.body.eeemalemscstudent,
  eeefemalemscstudent :req.body.eeefemalemscstudent,
  eeetotalmfilstudent :req.body.eeetotalmfilstudent,
  eeemalemfilstudent  :req.body.eeemalemfilstudent,
  eeefemalemfilstudent:req.body.eeefemalemfilstudent,
  eeetotalphdstudent  :req.body.eeetotalphdstudent,
  eeemalephdstudent   :req.body.eeemalephdstudent,
  eeefemalephdstudent :req.body.eeefemalephdstudent,
  eeeforeignmalebscstudent   :req.body.eeeforeignmalebscstudent,
  eeeforeignfemalebscstudent :req.body.eeeforeignfemalebscstudent,
  eeeforeignmalemscstudent   :req.body.eeeforeignmalemscstudent,
  eeeforeignfemalemscstudent :req.body.eeeforeignfemalemscstudent,
  eeeforeignmalemfilstudent  :req.body.eeeforeignmalemfilstudent,
  eeeforeignfemalemfilstudent:req.body.eeeforeignfemalemfilstudent,
  eeeforeignmalephdstudent   :req.body.eeeforeignmalephdstudent,
  eeeforeignfemalephdstudent :req.body.eeeforeignfemalephdstudent,
  eeefulltimemfilmaleteacher  :req.body.eeefulltimemfilmaleteacher,
  eeefulltimemfilfemaleteacher:req.body.eeefulltimemfilfemaleteacher,
  eeeparttimemfilmaleteacher  :req.body.eeeparttimemfilmaleteacher,
  eeeparttimemfilfemaleteacher:req.body.eeeparttimemfilfemaleteacher,
  eeefulltimephdmaleteacher   :req.body.eeefulltimephdmaleteacher,
  eeefulltimephdfemaleteacher :req.body.eeefulltimephdfemaleteacher,
  eeeparttimephdmaleteacher   :req.body.eeeparttimephdmaleteacher,
  eeeparttimephdfemaleteacher :req.body.eeeparttimephdfemaleteacher,
  eeefulltimemscmaleteacher   :req.body.eeefulltimemscmaleteacher,
  eeefulltimemscfemaleteacher :req.body.eeefulltimemscfemaleteacher,
  eeeparttimemscmaleteacher   :req.body.eeeparttimemscmaleteacher,
  eeeparttimemscfemaleteacher :req.body.eeeparttimemscfemaleteacher,
  eeefulltimebscmaleteacher   :req.body.eeefulltimebscmaleteacher,
  eeefulltimebscfemaleteacher :req.body.eeefulltimebscfemaleteacher,
  eeeparttimebscmaleteacher   :req.body.eeeparttimebscmaleteacher,
  eeeparttimebscfemaleteacher :req.body.eeeparttimebscfemaleteacher,
  eeefulltimeothermaleteacher :req.body.eeefulltimeothermaleteacher,
  eeefulltimeotherfemaleteacher:req.body.eeefulltimeotherfemaleteacher,
  eeeparttimeothermaleteacher  :req.body.eeeparttimeothermaleteacher,
  eeeparttimeotherfemaleteacher:req.body.eeeparttimeotherfemaleteacher,
  eeeresearch1  :req.body.eeeresearch1,
  eeeresearch2  :req.body.eeeresearch2,
  eeeresearch3  :req.body.eeeresearch3,
  eeeresearch4  :req.body.eeeresearch4,
  eeeresearch5  :req.body.eeeresearch5,
  eeeresearch6  :req.body.eeeresearch6,
  eeejournal    :req.body.eeejournal,
  eeeconference :req.body.eeeconference,
  eeeresearch8  :req.body.eeeresearch8,
  eeeresearch9  :req.body.eeeresearch9,
  eeeresearch10 :req.body.eeeresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/eeeuser/'+req.params.id);
          }
        });
});

app.get('/eeeuser/:id',function(req,res){
  res.render('eeedata',{eeeuser:req.eeeuserId});
});
app.get('/eeeuser/:id/delete', function(req,res){
  eeeuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/eee');
  });
});




app.get('/eteadmin',function(req,res){
    res.render('eteadmin');
});

app.get('/etedata',function(req,res){
  if(req.query.etesession){
    eteuser.findOne({_id:req.query.etesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('etedata',{eteuser:doc});
    }
  });
  }
});

app.post('/eteadmin',function(req,res){
  session=req.session;
  if(req.body.username=='eteadmin' && req.body.password=='eteadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/ete');
})

app.get('/etelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/eteadmin');
  })
})

app.get('/ete',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('ete');
  }
  else
  {
    res.end('who are you');
  }
});

var eteSchema=new mongoose.Schema({
  _id                 :Number,
  etetotalbscstudent  :Number,
  etemalebscstudent   :Number,
  etefemalebscstudent :Number,
  etetotalmscstudent  :Number,
  etemalemscstudent   :Number,
  etefemalemscstudent :Number,
  etetotalmfilstudent :Number,
  etemalemfilstudent  :Number,
  etefemalemfilstudent:Number,
  etetotalphdstudent  :Number,
  etemalephdstudent   :Number,
  etefemalephdstudent :Number,
  eeeforeignmalebscstudent   :Number,
  eeeforeignfemalebscstudent :Number,
  eeeforeignmalemscstudent   :Number,
  eeeforeignfemalemscstudent :Number,
  eeeforeignmalemfilstudent  :Number,
  eeeforeignfemalemfilstudent:Number,
  eeeforeignmalephdstudent   :Number,
  eeeforeignfemalephdstudent :Number,
  etefulltimemfilmaleteacher  :Number,
  etefulltimemfilfemaleteacher:Number,
  eteparttimemfilmaleteacher  :Number,
  eteparttimemfilfemaleteacher:Number,
  etefulltimephdmaleteacher   :Number,
  etefulltimephdfemaleteacher :Number,
  eteparttimephdmaleteacher   :Number,
  eteparttimephdfemaleteacher :Number,
  etefulltimemscmaleteacher   :Number,
  etefulltimemscfemaleteacher :Number,
  eteparttimemscmaleteacher   :Number,
  eteparttimemscfemaleteacher :Number,
  etefulltimebscmaleteacher   :Number,
  etefulltimebscfemaleteacher :Number,
  eteparttimebscmaleteacher   :Number,
  eteparttimebscfemaleteacher :Number,
  etefulltimeothermaleteacher :Number,
  etefulltimeotherfemaleteacher:Number,
  eteparttimeothermaleteacher  :Number,
  eteparttimeotherfemaleteacher:Number,
  eteresearch1  :Number,
  eteresearch2  :Number,
  eteresearch3  :Number,
  eteresearch4  :Number,
  eteresearch5  :Number,
  eteresearch6  :Number,
  etejournal    :Number,
  eteconference :Number,
  eteresearch8  :Number,
  eteresearch9  :Number,
  eteresearch10 :Number
});

var eteuser=mongoose.model('ete',eteSchema);

app.post('/etenew',function(req,res){
  new eteuser({
  _id                 :req.body.session,
  etetotalbscstudent  :req.body.etetotalbscstudent,
  etemalebscstudent   :req.body.etemalebscstudent,
  etefemalebscstudent :req.body.etefemalebscstudent,
  etetotalmscstudent  :req.body.etetotalmscstudent,
  etemalemscstudent   :req.body.etemalemscstudent,
  etefemalemscstudent :req.body.etefemalemscstudent,
  etetotalmfilstudent :req.body.etetotalmfilstudent,
  etemalemfilstudent  :req.body.etemalemfilstudent,
  etefemalemfilstudent:req.body.etefemalemfilstudent,
  etetotalphdstudent  :req.body.etetotalphdstudent,
  etemalephdstudent   :req.body.etemalephdstudent,
  etefemalephdstudent :req.body.etefemalephdstudent,
  eeeforeignmalebscstudent   :req.body.eeeforeignmalebscstudent,
  eeeforeignfemalebscstudent :req.body.eeeforeignfemalebscstudent,
  eeeforeignmalemscstudent   :req.body.eeeforeignmalemscstudent,
  eeeforeignfemalemscstudent :req.body.eeeforeignfemalemscstudent,
  eeeforeignmalemfilstudent  :req.body.eeeforeignmalemfilstudent,
  eeeforeignfemalemfilstudent:req.body.eeeforeignfemalemfilstudent,
  eeeforeignmalephdstudent   :req.body.eeeforeignmalephdstudent,
  eeeforeignfemalephdstudent :req.body.eeeforeignfemalephdstudent,
  etefulltimemfilmaleteacher  :req.body.etefulltimemfilmaleteacher,
  etefulltimemfilfemaleteacher:req.body.etefulltimemfilfemaleteacher,
  eteparttimemfilmaleteacher  :req.body.eteparttimemfilmaleteacher,
  eteparttimemfilfemaleteacher:req.body.eteparttimemfilfemaleteacher,
  etefulltimephdmaleteacher   :req.body.etefulltimephdmaleteacher,
  etefulltimephdfemaleteacher :req.body.etefulltimephdfemaleteacher,
  eteparttimephdmaleteacher   :req.body.eteparttimephdmaleteacher,
  eteparttimephdfemaleteacher :req.body.eteparttimephdfemaleteacher,
  etefulltimemscmaleteacher   :req.body.etefulltimemscmaleteacher,
  etefulltimemscfemaleteacher :req.body.etefulltimemscfemaleteacher,
  eteparttimemscmaleteacher   :req.body.eteparttimemscmaleteacher,
  eteparttimemscfemaleteacher :req.body.eteparttimemscfemaleteacher,
  etefulltimebscmaleteacher   :req.body.etefulltimebscmaleteacher,
  etefulltimebscfemaleteacher :req.body.etefulltimebscfemaleteacher,
  eteparttimebscmaleteacher   :req.body.eteparttimebscmaleteacher,
  eteparttimebscfemaleteacher :req.body.eteparttimebscfemaleteacher,
  etefulltimeothermaleteacher :req.body.etefulltimeothermaleteacher,
  etefulltimeotherfemaleteacher:req.body.etefulltimeotherfemaleteacher,
  eteparttimeothermaleteacher  :req.body.eteparttimeothermaleteacher,
  eteparttimeotherfemaleteacher:req.body.eteparttimeotherfemaleteacher,
  eteresearch1  :req.body.eteresearch1,
  eteresearch2  :req.body.eteresearch2,
  eteresearch3  :req.body.eteresearch3,
  eteresearch4  :req.body.eteresearch4,
  eteresearch5  :req.body.eteresearch5,
  eteresearch6  :req.body.eteresearch6,
  etejournal    :req.body.etejournal,
  eteconference :req.body.eteconference,
  eteresearch9  :req.body.eteresearch8,
  eteresearch9  :req.body.eteresearch9,
  eteresearch10 :req.body.eteresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('etedata',{eteuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  eteuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.eteuserId=doc;
        next();
      }
  });
});

app.get('/eteuser/:id/edit',function(req,res){
  res.render('etedataupdate',{eteuser:req.eteuserId});
});

// for updating data
app.post('/eteuser/:id', function(req, res){
  eteuser.updateOne({_id: req.params.id},
    { $set:{
  etetotalbscstudent  :req.body.etetotalbscstudent,
  etemalebscstudent   :req.body.etemalebscstudent,
  etefemalebscstudent :req.body.etefemalebscstudent,
  etetotalmscstudent  :req.body.etetotalmscstudent,
  etemalemscstudent   :req.body.etemalemscstudent,
  etefemalemscstudent :req.body.etefemalemscstudent,
  etetotalmfilstudent :req.body.etetotalmfilstudent,
  etemalemfilstudent  :req.body.etemalemfilstudent,
  etefemalemfilstudent:req.body.etefemalemfilstudent,
  etetotalphdstudent  :req.body.etetotalphdstudent,
  etemalephdstudent   :req.body.etemalephdstudent,
  etefemalephdstudent :req.body.etefemalephdstudent,
  eeeforeignmalebscstudent   :req.body.eeeforeignmalebscstudent,
  eeeforeignfemalebscstudent :req.body.eeeforeignfemalebscstudent,
  eeeforeignmalemscstudent   :req.body.eeeforeignmalemscstudent,
  eeeforeignfemalemscstudent :req.body.eeeforeignfemalemscstudent,
  eeeforeignmalemfilstudent  :req.body.eeeforeignmalemfilstudent,
  eeeforeignfemalemfilstudent:req.body.eeeforeignfemalemfilstudent,
  eeeforeignmalephdstudent   :req.body.eeeforeignmalephdstudent,
  eeeforeignfemalephdstudent :req.body.eeeforeignfemalephdstudent,
  etefulltimemfilmaleteacher  :req.body.etefulltimemfilmaleteacher,
  etefulltimemfilfemaleteacher:req.body.etefulltimemfilfemaleteacher,
  eteparttimemfilmaleteacher  :req.body.eteparttimemfilmaleteacher,
  eteparttimemfilfemaleteacher:req.body.eteparttimemfilfemaleteacher,
  etefulltimephdmaleteacher   :req.body.etefulltimephdmaleteacher,
  etefulltimephdfemaleteacher :req.body.etefulltimephdfemaleteacher,
  eteparttimephdmaleteacher   :req.body.eteparttimephdmaleteacher,
  eteparttimephdfemaleteacher :req.body.eteparttimephdfemaleteacher,
  etefulltimemscmaleteacher   :req.body.etefulltimemscmaleteacher,
  etefulltimemscfemaleteacher :req.body.etefulltimemscfemaleteacher,
  eteparttimemscmaleteacher   :req.body.eteparttimemscmaleteacher,
  eteparttimemscfemaleteacher :req.body.eteparttimemscfemaleteacher,
  etefulltimebscmaleteacher   :req.body.etefulltimebscmaleteacher,
  etefulltimebscfemaleteacher :req.body.etefulltimebscfemaleteacher,
  eteparttimebscmaleteacher   :req.body.eteparttimebscmaleteacher,
  eteparttimebscfemaleteacher :req.body.eteparttimebscfemaleteacher,
  etefulltimeothermaleteacher :req.body.etefulltimeothermaleteacher,
  etefulltimeotherfemaleteacher:req.body.etefulltimeotherfemaleteacher,
  eteparttimeothermaleteacher  :req.body.eteparttimeothermaleteacher,
  eteparttimeotherfemaleteacher:req.body.eteparttimeotherfemaleteacher,
  eteresearch1  :req.body.eteresearch1,
  eteresearch2  :req.body.eteresearch2,
  eteresearch3  :req.body.eteresearch3,
  eteresearch4  :req.body.eteresearch4,
  eteresearch5  :req.body.eteresearch5,
  eteresearch6  :req.body.eteresearch6,
  etejournal    :req.body.etejournal,
  eteconference :req.body.eteconference,
  eteresearch8  :req.body.eteresearch8,
  eteresearch9  :req.body.eteresearch9,
  eteresearch10 :req.body.eteresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/eteuser/'+req.params.id);
          }
        });
});

// to show the view page
app.get('/eteuser/:id',function(req,res){
  res.render('etedata',{eteuser:req.eteuserId});
});
app.get('/eteuser/:id/delete', function(req,res){
  eteuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/ete');
  });
});





app.get('/eceadmin',function(req,res){
    res.render('eceadmin');
});

app.get('/ecedata',function(req,res){
  if(req.query.ecesession){
    eceuser.findOne({_id:req.query.ecesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('ecedata',{eceuser:doc});
    }
  });
  }
});

app.post('/eceadmin',function(req,res){
  session=req.session;
  if(req.body.username=='eceadmin' && req.body.password=='eceadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/ece');
})

app.get('/ecelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/eceadmin');
  })
})

app.get('/ece',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('ece');
  }
  else
  {
    res.end('who are you');
  }
});

var eceSchema=new mongoose.Schema({
  _id                 :Number,
  ecetotalbscstudent  :Number,
  ecemalebscstudent   :Number,
  ecefemalebscstudent :Number,
  ecetotalmscstudent  :Number,
  ecemalemscstudent   :Number,
  ecefemalemscstudent :Number,
  ecetotalmfilstudent :Number,
  ecemalemfilstudent  :Number,
  ecefemalemfilstudent:Number,
  ecetotalphdstudent  :Number,
  ecemalephdstudent   :Number,
  ecefemalephdstudent :Number,
  eceforeignmalebscstudent   :Number,
  eceforeignfemalebscstudent :Number,
  eceforeignmalemscstudent   :Number,
  eceforeignfemalemscstudent :Number,
  eceforeignmalemfilstudent  :Number,
  eceforeignfemalemfilstudent:Number,
  eceforeignmalephdstudent   :Number,
  eceforeignfemalephdstudent :Number,
  ecefulltimemfilmaleteacher  :Number,
  ecefulltimemfilfemaleteacher:Number,
  eceparttimemfilmaleteacher  :Number,
  eceparttimemfilfemaleteacher:Number,
  ecefulltimephdmaleteacher   :Number,
  ecefulltimephdfemaleteacher :Number,
  eceparttimephdmaleteacher   :Number,
  eceparttimephdfemaleteacher :Number,
  ecefulltimemscmaleteacher   :Number,
  ecefulltimemscfemaleteacher :Number,
  eceparttimemscmaleteacher   :Number,
  eceparttimemscfemaleteacher :Number,
  ecefulltimebscmaleteacher   :Number,
  ecefulltimebscfemaleteacher :Number,
  eceparttimebscmaleteacher   :Number,
  eceparttimebscfemaleteacher :Number,
  ecefulltimeothermaleteacher :Number,
  ecefulltimeotherfemaleteacher:Number,
  eceparttimeothermaleteacher  :Number,
  eceparttimeotherfemaleteacher:Number,
  eceresearch1  :Number,
  eceresearch2  :Number,
  eceresearch3  :Number,
  eceresearch4  :Number,
  eceresearch5  :Number,
  eceresearch6  :Number,
  ecejournal    :Number,
  ececonference :Number,
  eceresearch8  :Number,
  eceresearch9  :Number,
  eceresearch10 :Number
});

var eceuser=mongoose.model('ece',eceSchema);

app.post('/ecenew',function(req,res){
  new eceuser({
  _id                 :req.body.session,
 ecetotalbscstudent  :req.body.ecetotalbscstudent,
  ecemalebscstudent   :req.body.ecemalebscstudent,
  ecefemalebscstudent :req.body.ecefemalebscstudent,
  ecetotalmscstudent  :req.body.ecetotalmscstudent,
  ecemalemscstudent   :req.body.ecemalemscstudent,
  ecefemalemscstudent :req.body.ecefemalemscstudent,
  ecetotalmfilstudent :req.body.ecetotalmfilstudent,
  ecemalemfilstudent  :req.body.ecemalemfilstudent,
  ecefemalemfilstudent:req.body.ecefemalemfilstudent,
  ecetotalphdstudent  :req.body.ecetotalphdstudent,
  ecemalephdstudent   :req.body.ecemalephdstudent,
  ecefemalephdstudent :req.body.ecefemalephdstudent,
  eceforeignmalebscstudent   :req.body.eceforeignmalebscstudent,
  eceforeignfemalebscstudent :req.body.eceforeignfemalebscstudent,
  eceforeignmalemscstudent   :req.body.eceforeignmalemscstudent,
  eceforeignfemalemscstudent :req.body.eceforeignfemalemscstudent,
  eceforeignmalemfilstudent  :req.body.eceforeignmalemfilstudent,
  eceforeignfemalemfilstudent:req.body.eceforeignfemalemfilstudent,
  eceforeignmalephdstudent   :req.body.eceforeignmalephdstudent,
  eceforeignfemalephdstudent :req.body.eceforeignfemalephdstudent,
  ecefulltimemfilmaleteacher  :req.body.ecefulltimemfilmaleteacher,
  ecefulltimemfilfemaleteacher:req.body.ecefulltimemfilfemaleteacher,
  eceparttimemfilmaleteacher  :req.body.eceparttimemfilmaleteacher,
  eceparttimemfilfemaleteacher:req.body.eceparttimemfilfemaleteacher,
  ecefulltimephdmaleteacher   :req.body.ecefulltimephdmaleteacher,
  ecefulltimephdfemaleteacher :req.body.ecefulltimephdfemaleteacher,
  eceparttimephdmaleteacher   :req.body.eceparttimephdmaleteacher,
  eceparttimephdfemaleteacher :req.body.eceparttimephdfemaleteacher,
  ecefulltimemscmaleteacher   :req.body.ecefulltimemscmaleteacher,
  ecefulltimemscfemaleteacher :req.body.ecefulltimemscfemaleteacher,
  eceparttimemscmaleteacher   :req.body.eceparttimemscmaleteacher,
  eceparttimemscfemaleteacher :req.body.eceparttimemscfemaleteacher,
  ecefulltimebscmaleteacher   :req.body.ecefulltimebscmaleteacher,
  ecefulltimebscfemaleteacher :req.body.ecefulltimebscfemaleteacher,
  eceparttimebscmaleteacher   :req.body.eceparttimebscmaleteacher,
  eceparttimebscfemaleteacher :req.body.eceparttimebscfemaleteacher,
  ecefulltimeothermaleteacher :req.body.ecefulltimeothermaleteacher,
  ecefulltimeotherfemaleteacher:req.body.ecefulltimeotherfemaleteacher,
  eceparttimeothermaleteacher  :req.body.eceparttimeothermaleteacher,
  eceparttimeotherfemaleteacher:req.body.eceparttimeotherfemaleteacher,
  eceresearch1  :req.body.eceresearch1,
  eceresearch2  :req.body.eceresearch2,
  eceresearch3  :req.body.eceresearch3,
  eceresearch4  :req.body.eceresearch4,
  eceresearch5  :req.body.eceresearch5,
  eceresearch6  :req.body.eceresearch6,
  ecejournal    :req.body.ecejournal,
  ececonference :req.body.ececonference,
  eceresearch8  :req.body.eceresearch8,
  eceresearch9  :req.body.eceresearch9,
  eceresearch10 :req.body.eceresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('ecedata',{eceuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  eceuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.eceuserId=doc;
        next();
      }
  });
});

app.get('/eceuser/:id/edit',function(req,res){
  res.render('ecedataupdate',{eceuser:req.eceuserId});
});

// for updating data
app.post('/eceuser/:id', function(req, res){
  eceuser.updateOne({_id: req.params.id},
    { $set:{
  ecetotalbscstudent  :req.body.ecetotalbscstudent,
  ecemalebscstudent   :req.body.ecemalebscstudent,
  ecefemalebscstudent :req.body.ecefemalebscstudent,
  ecetotalmscstudent  :req.body.ecetotalmscstudent,
  ecemalemscstudent   :req.body.ecemalemscstudent,
  ecefemalemscstudent :req.body.ecefemalemscstudent,
  ecetotalmfilstudent :req.body.ecetotalmfilstudent,
  ecemalemfilstudent  :req.body.ecemalemfilstudent,
  ecefemalemfilstudent:req.body.ecefemalemfilstudent,
  ecetotalphdstudent  :req.body.ecetotalphdstudent,
  ecemalephdstudent   :req.body.ecemalephdstudent,
  ecefemalephdstudent :req.body.ecefemalephdstudent,
  eceforeignmalebscstudent   :req.body.eceforeignmalebscstudent,
  eceforeignfemalebscstudent :req.body.eceforeignfemalebscstudent,
  eceforeignmalemscstudent   :req.body.eceforeignmalemscstudent,
  eceforeignfemalemscstudent :req.body.eceforeignfemalemscstudent,
  eceforeignmalemfilstudent  :req.body.eceforeignmalemfilstudent,
  eceforeignfemalemfilstudent:req.body.eceforeignfemalemfilstudent,
  eceforeignmalephdstudent   :req.body.eceforeignmalephdstudent,
  eceforeignfemalephdstudent :req.body.eceforeignfemalephdstudent,
  ecefulltimemfilmaleteacher  :req.body.ecefulltimemfilmaleteacher,
  ecefulltimemfilfemaleteacher:req.body.ecefulltimemfilfemaleteacher,
  eceparttimemfilmaleteacher  :req.body.eceparttimemfilmaleteacher,
  eceparttimemfilfemaleteacher:req.body.eceparttimemfilfemaleteacher,
  ecefulltimephdmaleteacher   :req.body.ecefulltimephdmaleteacher,
  ecefulltimephdfemaleteacher :req.body.ecefulltimephdfemaleteacher,
  eceparttimephdmaleteacher   :req.body.eceparttimephdmaleteacher,
  eceparttimephdfemaleteacher :req.body.eceparttimephdfemaleteacher,
  ecefulltimemscmaleteacher   :req.body.ecefulltimemscmaleteacher,
  ecefulltimemscfemaleteacher :req.body.ecefulltimemscfemaleteacher,
  eceparttimemscmaleteacher   :req.body.eceparttimemscmaleteacher,
  eceparttimemscfemaleteacher :req.body.eceparttimemscfemaleteacher,
  ecefulltimebscmaleteacher   :req.body.ecefulltimebscmaleteacher,
  ecefulltimebscfemaleteacher :req.body.ecefulltimebscfemaleteacher,
  eceparttimebscmaleteacher   :req.body.eceparttimebscmaleteacher,
  eceparttimebscfemaleteacher :req.body.eceparttimebscfemaleteacher,
  ecefulltimeothermaleteacher :req.body.ecefulltimeothermaleteacher,
  ecefulltimeotherfemaleteacher:req.body.ecefulltimeotherfemaleteacher,
  eceparttimeothermaleteacher  :req.body.eceparttimeothermaleteacher,
  eceparttimeotherfemaleteacher:req.body.eceparttimeotherfemaleteacher,
  eceresearch1  :req.body.eceresearch1,
  eceresearch2  :req.body.eceresearch2,
  eceresearch3  :req.body.eceresearch3,
  eceresearch4  :req.body.eceresearch4,
  eceresearch5  :req.body.eceresearch5,
  eceresearch6  :req.body.eceresearch6,
  ecejournal    :req.body.ecejournal,
  ececonference :req.body.ececonference,
  eceresearch8  :req.body.eceresearch8,
  eceresearch9  :req.body.eceresearch9,
  eceresearch10 :req.body.eceresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/eceuser/'+req.params.id);
          }
        });
});

app.get('/eceuser/:id',function(req,res){
  res.render('ecedata',{eceuser:req.eceuserId});
});
app.get('/eceuser/:id/delete', function(req,res){
  eceuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/ece');
  });
});




app.get('/meadmin',function(req,res){
    res.render('meadmin');
});

app.get('/medata',function(req,res){
  if(req.query.mesession){
    meuser.findOne({_id:req.query.mesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('medata',{meuser:doc});
    }
  });
  }
});

app.post('/meadmin',function(req,res){
  session=req.session;
  if(req.body.username=='meadmin' && req.body.password=='meadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/me');
})

app.get('/melogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/meadmin');
  })
})

app.get('/me',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('me');
  }
  else
  {
    res.end('who are you');
  }
});

var meSchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

var meuser=mongoose.model('me',meSchema);

app.post('/menew',function(req,res){
  new meuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('medata',{meuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  meuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.meuserId=doc;
        next();
      }
  });
});

app.get('/meuser/:id/edit',function(req,res){
  res.render('medataupdate',{meuser:req.meuserId});
});

// for updating data
app.post('/meuser/:id', function(req, res){
  meuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/meuser/'+req.params.id);
          }
        });
});

app.get('/meuser/:id',function(req,res){
  res.render('medata',{meuser:req.meuserId});
});
app.get('/meuser/:id/delete', function(req,res){
  meuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/me');
  });
});





app.get('/mteadmin',function(req,res){
    res.render('mteadmin');
});

app.get('/mtedata',function(req,res){
  if(req.query.mtesession){
    mteuser.findOne({_id:req.query.mtesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('mtedata',{mteuser:doc});
    }
  });
  }
});

app.post('/mteadmin',function(req,res){
  session=req.session;
  if(req.body.username=='mteadmin' && req.body.password=='mteadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/mte');
})

app.get('/mtelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/mteadmin');
  })
})

app.get('/mte',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('mte');
  }
  else
  {
    res.end('who are you');
  }
});

var mteSchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

var mteuser=mongoose.model('mte',mteSchema);

app.post('/mtenew',function(req,res){
  new mteuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('mtedata',{mteuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  mteuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.mteuserId=doc;
        next();
      }
  });
});

app.get('/mteuser/:id/edit',function(req,res){
  res.render('mtedataupdate',{mteuser:req.mteuserId});
});

// for updating data
app.post('/mteuser/:id', function(req, res){
  mteuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/mteuser/'+req.params.id);
          }
        });
});

app.get('/mteuser/:id',function(req,res){
  res.render('mtedata',{mteuser:req.mteuserId});
});
app.get('/mteuser/:id/delete', function(req,res){
  mteuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/mte');
  });
});






app.get('/mseadmin',function(req,res){
    res.render('mseadmin');
});

app.get('/msedata',function(req,res){
  if(req.query.msesession){
    mseuser.findOne({_id:req.query.msesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('msedata',{mseuser:doc});
    }
  });
  }
});

app.post('/mseadmin',function(req,res){
  session=req.session;
  if(req.body.username=='mseadmin' && req.body.password=='mseadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/mse');
})

app.get('/mselogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/mseadmin');
  })
})

app.get('/mse',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('mse');
  }
  else
  {
    res.end('who are you');
  }
});

var mseSchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

var mseuser=mongoose.model('mse',mseSchema);

app.post('/msenew',function(req,res){
  new mseuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('msedata',{mseuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  mseuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.mseuserId=doc;
        next();
      }
  });
});

app.get('/mseuser/:id/edit',function(req,res){
  res.render('msedataupdate',{mseuser:req.mseuserId});
});

// for updating data
app.post('/mseuser/:id', function(req, res){
  mseuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/mseuser/'+req.params.id);
          }
        });
});

app.get('/mseuser/:id',function(req,res){
  res.render('msedata',{mseuser:req.mseuserId});
});
app.get('/mseuser/:id/delete', function(req,res){
  mseuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/mse');
  });
});







app.get('/gceadmin',function(req,res){
    res.render('gceadmin');
});

app.get('/gcedata',function(req,res){
  if(req.query.gcesession){
    gceuser.findOne({_id:req.query.gcesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('gcedata',{gceuser:doc});
    }
  });
  }
});

app.post('/gceadmin',function(req,res){
  session=req.session;
  if(req.body.username=='gceadmin' && req.body.password=='gceadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/gce');
})

app.get('/gcelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/gceadmin');
  })
})

app.get('/gce',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('gce');
  }
  else
  {
    res.end('who are you');
  }
});

var gceSchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

var gceuser=mongoose.model('gce',gceSchema);

app.post('/gcenew',function(req,res){
  new gceuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('gcedata',{gceuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  gceuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.gceuserId=doc;
        next();
      }
  });
});

app.get('/gceuser/:id/edit',function(req,res){
  res.render('gcedataupdate',{gceuser:req.gceuserId});
});

// for updating data
app.post('/gceuser/:id', function(req, res){
  gceuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/gceuser/'+req.params.id);
          }
        });
});

app.get('/gceuser/:id',function(req,res){
  res.render('gcedata',{gceuser:req.gceuserId});
});
app.get('/gceuser/:id/delete', function(req,res){
  gceuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/gce');
  });
});





app.get('/ipeadmin',function(req,res){
    res.render('ipeadmin');
});

app.get('/ipedata',function(req,res){
  if(req.query.ipesession){
    ipeuser.findOne({_id:req.query.ipesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('ipedata',{ipeuser:doc});
    }
  });
  }
});

app.post('/ipeadmin',function(req,res){
  session=req.session;
  if(req.body.username=='ipeadmin' && req.body.password=='ipeadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/ipe');
})

app.get('/ipelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/ipeadmin');
  })
})

app.get('/ipe',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('ipe');
  }
  else
  {
    res.end('who are you');
  }
});

var ipeSchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

var ipeuser=mongoose.model('ipe',ipeSchema);

app.post('/ipenew',function(req,res){
  new ipeuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('ipedata',{ipeuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  ipeuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.ipeuserId=doc;
        next();
      }
  });
});

app.get('/ipeuser/:id/edit',function(req,res){
  res.render('ipedataupdate',{ipeuser:req.ipeuserId});
});

// for updating data
app.post('/ipeuser/:id', function(req, res){
  ipeuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/ipeuser/'+req.params.id);
          }
        });
});

app.get('/ipeuser/:id',function(req,res){
  res.render('ipedata',{ipeuser:req.ipeuserId});
});
app.get('/ipeuser/:id/delete', function(req,res){
  ipeuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/ipe');
  });
});






app.get('/ceadmin',function(req,res){
    res.render('ceadmin');
});

app.get('/cedata',function(req,res){
  if(req.query.cesession){
    ceuser.findOne({_id:req.query.cesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('cedata',{ceuser:doc});
    }
  });
  }
});

app.post('/ceadmin',function(req,res){
  session=req.session;
  if(req.body.username=='ceadmin' && req.body.password=='ceadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/ce');
})

app.get('/celogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/ceadmin');
  })
})

app.get('/ce',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('ce');
  }
  else
  {
    res.end('who are you');
  }
});

var ceSchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

var ceuser=mongoose.model('ce',ceSchema);

app.post('/cenew',function(req,res){
  new ceuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('cedata',{ceuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  ceuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.ceuserId=doc;
        next();
      }
  });
});

app.get('/ceuser/:id/edit',function(req,res){
  res.render('cedataupdate',{ceuser:req.ceuserId});
});

// for updating data
app.post('/ceuser/:id', function(req, res){
  ceuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/ceuser/'+req.params.id);
          }
        });
});

app.get('/ceuser/:id',function(req,res){
  res.render('cedata',{ceuser:req.ceuserId});
});
app.get('/ceuser/:id/delete', function(req,res){
  ceuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/ce');
  });
});





app.get('/urpadmin',function(req,res){
    res.render('urpadmin');
});

app.get('/urpdata',function(req,res){
  if(req.query.urpsession){
    urpuser.findOne({_id:req.query.urpsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('urpdata',{urpuser:doc});
    }
  });
  }
});

app.post('/urpadmin',function(req,res){
  session=req.session;
  if(req.body.username=='urpadmin' && req.body.password=='urpadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/urp');
})

app.get('/urplogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/urpadmin');
  })
})

app.get('/urp',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('urp');
  }
  else
  {
    res.end('who are you');
  }
});

var urpSchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

var urpuser=mongoose.model('urp',urpSchema);

app.post('/urpnew',function(req,res){
  new urpuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('urpdata',{urpuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  urpuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.urpuserId=doc;
        next();
      }
  });
});

app.get('/urpuser/:id/edit',function(req,res){
  res.render('urpdataupdate',{urpuser:req.urpuserId});
});

// for updating data
app.post('/urpuser/:id', function(req, res){
  urpuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/urpuser/'+req.params.id);
          }
        });
});

app.get('/urpuser/:id',function(req,res){
  res.render('urpdata',{urpuser:req.urpuserId});
});
app.get('/urpuser/:id/delete', function(req,res){
  urpuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/urp');
  });
});





app.get('/archiadmin',function(req,res){
    res.render('archiadmin');
});

app.get('/archidata',function(req,res){
  if(req.query.archisession){
    archiuser.findOne({_id:req.query.archisession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('archidata',{archiuser:doc});
    }
  });
  }
});

app.post('/archiadmin',function(req,res){
  session=req.session;
  if(req.body.username=='archiadmin' && req.body.password=='archiadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/archi');
})

app.get('/archilogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/archiadmin');
  })
})

app.get('/archi',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('archi');
  }
  else
  {
    res.end('who are you');
  }
});

var archiSchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

var archiuser=mongoose.model('archi',archiSchema);

app.post('/archinew',function(req,res){
  new archiuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('archidata',{archiuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  archiuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.archiuserId=doc;
        next();
      }
  });
});

app.get('/archiuser/:id/edit',function(req,res){
  res.render('archidataupdate',{archiuser:req.archiuserId});
});

// for updating data
app.post('/archiuser/:id', function(req, res){
  archiuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/archiuser/'+req.params.id);
          }
        });
});

app.get('/archiuser/:id',function(req,res){
  res.render('archidata',{archiuser:req.archiuserId});
});
app.get('/archiuser/:id/delete', function(req,res){
  archiuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/archi');
  });
});





app.get('/becmadmin',function(req,res){
    res.render('becmadmin');
});

app.get('/becmdata',function(req,res){
  if(req.query.becmsession){
    becmuser.findOne({_id:req.query.becmsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('becmdata',{becmuser:doc});
    }
  });
  }
});

app.post('/becmadmin',function(req,res){
  session=req.session;
  if(req.body.username=='becmadmin' && req.body.password=='becmadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/becm');
})

app.get('/becmlogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/becmadmin');
  })
})

app.get('/becm',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('becm');
  }
  else
  {
    res.end('who are you');
  }
});

var becmSchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

var becmuser=mongoose.model('becm',becmSchema);

app.post('/becmnew',function(req,res){
  new becmuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('becmdata',{becmuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  becmuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.becmuserId=doc;
        next();
      }
  });
});

app.get('/becmuser/:id/edit',function(req,res){
  res.render('becmdataupdate',{becmuser:req.becmuserId});
});

// for updating data
app.post('/becmuser/:id', function(req, res){
  becmuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/becmuser/'+req.params.id);
          }
        });
});

app.get('/becmuser/:id',function(req,res){
  res.render('becmdata',{becmuser:req.becmuserId});
});
app.get('/becmuser/:id/delete', function(req,res){
  becmuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/becm');
  });
});






app.get('/cfpeadmin',function(req,res){
    res.render('cfpeadmin');
});

app.get('/cfpedata',function(req,res){
  if(req.query.cfpesession){
    cfpeuser.findOne({_id:req.query.cfpesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('cfpedata',{cfpeuser:doc});
    }
  });
  }
});

app.post('/cfpeadmin',function(req,res){
  session=req.session;
  if(req.body.username=='cfpeadmin' && req.body.password=='cfpeadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/cfpe');
})

app.get('/cfpelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/cfpeadmin');
  })
})

app.get('/cfpe',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('cfpe');
  }
  else
  {
    res.end('who are you');
  }
});

var cfpeSchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

var cfpeuser=mongoose.model('cfpe',cfpeSchema);

app.post('/cfpenew',function(req,res){
  new cfpeuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('cfpedata',{cfpeuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  cfpeuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.cfpeuserId=doc;
        next();
      }
  });
});

app.get('/cfpeuser/:id/edit',function(req,res){
  res.render('cfpedataupdate',{cfpeuser:req.cfpeuserId});
});

// for updating data
app.post('/cfpeuser/:id', function(req, res){
  cfpeuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/cfpeuser/'+req.params.id);
          }
        });
});

app.get('/cfpeuser/:id',function(req,res){
  res.render('cfpedata',{cfpeuser:req.cfpeuserId});
});
app.get('/cfpeuser/:id/delete', function(req,res){
  cfpeuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/cfpe');
  });
});






app.get('/humadmin',function(req,res){
    res.render('humadmin');
});

app.get('/humdata',function(req,res){
  if(req.query.humsession){
    humuser.findOne({_id:req.query.humsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('humdata',{humuser:doc});
    }
  });
  }
});

app.post('/humadmin',function(req,res){
  session=req.session;
  if(req.body.username=='humadmin' && req.body.password=='humadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/hum');
})

app.get('/humlogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/humadmin');
  })
})

app.get('/hum',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('hum');
  }
  else
  {
    res.end('who are you');
  }
});

var humSchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

var humuser=mongoose.model('hum',humSchema);

app.post('/humnew',function(req,res){
  new humuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('humdata',{humuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  humuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.humuserId=doc;
        next();
      }
  });
});

app.get('/humuser/:id/edit',function(req,res){
  res.render('humdataupdate',{humuser:req.humuserId});
});

// for updating data
app.post('/humuser/:id', function(req, res){
  humuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/humuser/'+req.params.id);
          }
        });
});

app.get('/humuser/:id',function(req,res){
  res.render('humdata',{humuser:req.humuserId});
});
app.get('/humuser/:id/delete', function(req,res){
  humuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/hum');
  });
});




app.get('/mathadmin',function(req,res){
    res.render('mathadmin');
});

app.get('/mathdata',function(req,res){
  if(req.query.mathsession){
    mathuser.findOne({_id:req.query.mathsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('mathdata',{mathuser:doc});
    }
  });
  }
});

app.post('/mathadmin',function(req,res){
  session=req.session;
  if(req.body.username=='mathadmin' && req.body.password=='mathadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/math');
})

app.get('/mathlogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/mathadmin');
  })
})

app.get('/math',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('math');
  }
  else
  {
    res.end('who are you');
  }
});

var mathSchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

var mathuser=mongoose.model('math',mathSchema);

app.post('/mathnew',function(req,res){
  new mathuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('mathdata',{mathuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  mathuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.mathuserId=doc;
        next();
      }
  });
});

app.get('/mathuser/:id/edit',function(req,res){
  res.render('mathdataupdate',{mathuser:req.mathuserId});
});

// for updating data
app.post('/mathuser/:id', function(req, res){
  mathuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/mathuser/'+req.params.id);
          }
        });
});

app.get('/mathuser/:id',function(req,res){
  res.render('mathdata',{mathuser:req.mathuserId});
});
app.get('/mathuser/:id/delete', function(req,res){
  mathuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/math');
  });
});





app.get('/chemistryadmin',function(req,res){
    res.render('chemistryadmin');
});

app.get('/chemistrydata',function(req,res){
  if(req.query.chemistrysession){
    chemistryuser.findOne({_id:req.query.chemistrysession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('chemistrydata',{chemistryuser:doc});
    }
  });
  }
});

app.post('/chemistryadmin',function(req,res){
  session=req.session;
  if(req.body.username=='chemistryadmin' && req.body.password=='chemistryadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/chemistry');
})

app.get('/chemistrylogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/chemistryadmin');
  })
})

app.get('/chemistry',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('chemistry');
  }
  else
  {
    res.end('who are you');
  }
});

var chemistrySchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

var chemistryuser=mongoose.model('chemistry',chemistrySchema);

app.post('/chemistrynew',function(req,res){
  new chemistryuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('chemistrydata',{chemistryuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  chemistryuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.chemistryuserId=doc;
        next();
      }
  });
});

app.get('/chemistryuser/:id/edit',function(req,res){
  res.render('chemistrydataupdate',{chemistryuser:req.chemistryuserId});
});

// for updating data
app.post('/chemistryuser/:id', function(req, res){
  chemistryuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/chemistryuser/'+req.params.id);
          }
        });
});

app.get('/chemistryuser/:id',function(req,res){
  res.render('chemistrydata',{chemistryuser:req.chemistryuserId});
});
app.get('/chemistryuser/:id/delete', function(req,res){
  chemistryuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/chemistry');
  });
});





app.get('/physicsadmin',function(req,res){
    res.render('physicsadmin');
});

app.get('/physicsdata',function(req,res){
  if(req.query.physicssession){
    physicsuser.findOne({_id:req.query.physicssession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('physicsdata',{physicsuser:doc});
    }
  });
  }
});

app.post('/physicsadmin',function(req,res){
  session=req.session;
  if(req.body.username=='physicsadmin' && req.body.password=='physicsadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/physics');
})

app.get('/physicslogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/physicsadmin');
  })
})

app.get('/physics',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('physics');
  }
  else
  {
    res.end('who are you');
  }
});

var physicsSchema=new mongoose.Schema({
  _id                 :Number,
  metotalbscstudent  :Number,
  memalebscstudent   :Number,
  mefemalebscstudent :Number,
  metotalmscstudent  :Number,
  memalemscstudent   :Number,
  mefemalemscstudent :Number,
  metotalmfilstudent :Number,
  memalemfilstudent  :Number,
  mefemalemfilstudent:Number,
  metotalphdstudent  :Number,
  memalephdstudent   :Number,
  mefemalephdstudent :Number,
  meforeignmalebscstudent   :Number,
  meforeignfemalebscstudent :Number,
  meforeignmalemscstudent   :Number,
  meforeignfemalemscstudent :Number,
  meforeignmalemfilstudent  :Number,
  meforeignfemalemfilstudent:Number,
  meforeignmalephdstudent   :Number,
  meforeignfemalephdstudent :Number,
  mefulltimemfilmaleteacher  :Number,
  mefulltimemfilfemaleteacher:Number,
  meparttimemfilmaleteacher  :Number,
  meparttimemfilfemaleteacher:Number,
  mefulltimephdmaleteacher   :Number,
  mefulltimephdfemaleteacher :Number,
  meparttimephdmaleteacher   :Number,
  meparttimephdfemaleteacher :Number,
  mefulltimemscmaleteacher   :Number,
  mefulltimemscfemaleteacher :Number,
  meparttimemscmaleteacher   :Number,
  meparttimemscfemaleteacher :Number,
  mefulltimebscmaleteacher   :Number,
  mefulltimebscfemaleteacher :Number,
  meparttimebscmaleteacher   :Number,
  meparttimebscfemaleteacher :Number,
  mefulltimeothermaleteacher :Number,
  mefulltimeotherfemaleteacher:Number,
  meparttimeothermaleteacher  :Number,
  meparttimeotherfemaleteacher:Number,
  meresearch1  :Number,
  meresearch2  :Number,
  meresearch3  :Number,
  meresearch4  :Number,
  meresearch5  :Number,
  meresearch6  :Number,
  mejournal    :Number,
  meconference :Number,
  meresearch8  :Number,
  meresearch9  :Number,
  meresearch10 :Number
});

var physicsuser=mongoose.model('physics',physicsSchema);

app.post('/physicsnew',function(req,res){
  new physicsuser({
  _id                 :req.body.session,
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('physicsdata',{physicsuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  physicsuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.physicsuserId=doc;
        next();
      }
  });
});

app.get('/physicsuser/:id/edit',function(req,res){
  res.render('physicsdataupdate',{physicsuser:req.physicsuserId});
});

// for updating data
app.post('/physicsuser/:id', function(req, res){
  physicsuser.updateOne({_id: req.params.id},
    { $set:{
  metotalbscstudent  :req.body.metotalbscstudent,
  memalebscstudent   :req.body.memalebscstudent,
  mefemalebscstudent :req.body.mefemalebscstudent,
  metotalmscstudent  :req.body.metotalmscstudent,
  memalemscstudent   :req.body.memalemscstudent,
  mefemalemscstudent :req.body.mefemalemscstudent,
  metotalmfilstudent :req.body.metotalmfilstudent,
  memalemfilstudent  :req.body.memalemfilstudent,
  mefemalemfilstudent:req.body.mefemalemfilstudent,
  metotalphdstudent  :req.body.metotalphdstudent,
  memalephdstudent   :req.body.memalephdstudent,
  mefemalephdstudent :req.body.mefemalephdstudent,
  meforeignmalebscstudent   :req.body.meforeignmalebscstudent,
  meforeignfemalebscstudent :req.body.meforeignfemalebscstudent,
  meforeignmalemscstudent   :req.body.meforeignmalemscstudent,
  meforeignfemalemscstudent :req.body.meforeignfemalemscstudent,
  meforeignmalemfilstudent  :req.body.meforeignmalemfilstudent,
  meforeignfemalemfilstudent:req.body.meforeignfemalemfilstudent,
  meforeignmalephdstudent   :req.body.meforeignmalephdstudent,
  meforeignfemalephdstudent :req.body.meforeignfemalephdstudent,
  mefulltimemfilmaleteacher  :req.body.mefulltimemfilmaleteacher,
  mefulltimemfilfemaleteacher:req.body.mefulltimemfilfemaleteacher,
  meparttimemfilmaleteacher  :req.body.meparttimemfilmaleteacher,
  meparttimemfilfemaleteacher:req.body.meparttimemfilfemaleteacher,
  mefulltimephdmaleteacher   :req.body.mefulltimephdmaleteacher,
  mefulltimephdfemaleteacher :req.body.mefulltimephdfemaleteacher,
  meparttimephdmaleteacher   :req.body.meparttimephdmaleteacher,
  meparttimephdfemaleteacher :req.body.meparttimephdfemaleteacher,
  mefulltimemscmaleteacher   :req.body.mefulltimemscmaleteacher,
  mefulltimemscfemaleteacher :req.body.mefulltimemscfemaleteacher,
  meparttimemscmaleteacher   :req.body.meparttimemscmaleteacher,
  meparttimemscfemaleteacher :req.body.meparttimemscfemaleteacher,
  mefulltimebscmaleteacher   :req.body.mefulltimebscmaleteacher,
  mefulltimebscfemaleteacher :req.body.mefulltimebscfemaleteacher,
  meparttimebscmaleteacher   :req.body.meparttimebscmaleteacher,
  meparttimebscfemaleteacher :req.body.meparttimebscfemaleteacher,
  mefulltimeothermaleteacher :req.body.mefulltimeothermaleteacher,
  mefulltimeotherfemaleteacher:req.body.mefulltimeotherfemaleteacher,
  meparttimeothermaleteacher  :req.body.meparttimeothermaleteacher,
  meparttimeotherfemaleteacher:req.body.meparttimeotherfemaleteacher,
  meresearch1  :req.body.meresearch1,
  meresearch2  :req.body.meresearch2,
  meresearch3  :req.body.meresearch3,
  meresearch4  :req.body.meresearch4,
  meresearch5  :req.body.meresearch5,
  meresearch6  :req.body.meresearch6,
  mejournal    :req.body.mejournal,
  meconference :req.body.meconference,
  meresearch8  :req.body.meresearch8,
  meresearch9  :req.body.meresearch9,
  meresearch10 :req.body.meresearch10
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/physicsuser/'+req.params.id);
          }
        });
});

app.get('/physicsuser/:id',function(req,res){
  res.render('physicsdata',{physicsuser:req.physicsuserId});
});
app.get('/physicsuser/:id/delete', function(req,res){
    physicsuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/physics');
  });
});





app.get('/accountsectionadmin',function(req,res){
    res.render('accountsectionadmin');
});

app.get('/accountsectiondata',function(req,res){
  if(req.query.accountsectionsession){
    accountsectionuser.findOne({_id:req.query.accountsectionsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('accountsectiondata',{accountsectionuser:doc});
    }
  });
  }
});

app.post('/accountsectionadmin',function(req,res){
  session=req.session;
  if(req.body.username=='accountsectionadmin' && req.body.password=='accountsectionadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/accountsection');
})

app.get('/accountsectionlogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/accountsectionadmin');
  })
})

app.get('/accountsection',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('accountsection');
  }
  else
  {
    res.end('who are you');
  }
});

var accountsectionSchema=new mongoose.Schema({
  _id                 :Number,
  revenueallocation   :Number,
  developmentallocation:Number,
  ownallocation        :Number,
  foreignsource        :Number,
  rrevenueallocation:Number,
  revenueallocationexpense:Number,
  percentageofrevenueallocation:String,
  rdevelopmentallocation :Number,
  developmentallocationexpense :Number,
  percentageofdevelopmentallocation:String,
  rownallocation                   :Number,
  ownallocationexpense             :Number,
  percentageofownallocation        :String,
  rforeignsource                   :Number,
  foreignsourceexpense             :Number,
  percentageofforeignsource        :String,
  rothersourceallocation           :Number,
  othersource                      :Number,
  percentageofother                :String,
  insolvencygrant                  :Number,
  ownincome                        :Number,
  specialdevelopmentallocation     :Number,
  otherallocation                  :Number,
  educationexpense                 :Number,
  percentageofeducationbudget      :String,
  researchexpense                  :Number,
  percentageofresearchbudget       :String,
  salaryexpense                    :Number,
  percentageofsalarybudget         :String,
  researchschoolarshipexpense      :Number,
  percentageofresearchschoolarshipbudget:String,
  transportationexpense            :Number,
  percentageoftransportationbudget :String,
  electricityexpense               :Number,
  percentageofelectricitybudget    :String,
  infrastructuralexpense           :Number,
  percentageofinfrastructuralbudget:String,
  otherexpense                     :Number,
  percentageofotherbudget          :String,
  medicationexpense                :Number,
  percentageofmedication           :String,
  administrasionexpense            :Number,
  percentageofadministrasionexpense:String,
  pensonexpense                    :Number,
  percentageofpensonexpense        :String,
  residentialadvantagemaleteacher  :Number,
  residentialadvantagefemaleteacher:Number,
  residentialadvantagemaleofficer  :Number,
  residentialadvantagefemaleofficer:Number,
  residentialadvantagemalethirdclassemploye:Number,
  residentialadvantagefemalethirdclassemploye:Number,
  residentialadvantagemalefourthclassemploye :Number,
  residentialadvantagefemalefourthclassemploye:Number
});

var accountsectionuser=mongoose.model('accountsection',accountsectionSchema);

app.post('/accountsectionnew',function(req,res){
  new accountsectionuser({
  _id                 :req.body.session,
  revenueallocation   :req.body.revenueallocation,
  developmentallocation:req.body.developmentallocation,
  ownallocation        :req.body.ownallocation,
  foreignsource        :req.body.foreignsource,
  rrevenueallocation   :req.body.rrevenueallocation,
  revenueallocationexpense:req.body.revenueallocationexpense,
  percentageofrevenueallocation:req.body.percentageofrevenueallocation,
  rdevelopmentallocation :req.body.rdevelopmentallocation,
  developmentallocationexpense :req.body.developmentallocationexpense,
  percentageofdevelopmentallocation:req.body.percentageofdevelopmentallocation,
  rownallocation                   :req.body.rownallocation,
  ownallocationexpense             :req.body.ownallocationexpense,
  percentageofownallocation        :req.body.percentageofownallocation,
  rforeignsource                   :req.body.rforeignsource,
  foreignsourceexpense             :req.body.foreignsourceexpense,
  percentageofforeignsource        :req.body.percentageofforeignsource,
  rothersourceallocation           :req.body.rothersourceallocation,
  othersource                      :req.body.othersource,
  percentageofother                :req.body.percentageofother,
  insolvencygrant                  :req.body.insolvencygrant,
  ownincome                        :req.body.ownincome,
  specialdevelopmentallocation     :req.body.specialdevelopmentallocation,
  otherallocation                  :req.body.otherallocation,
  educationexpense                 :req.body.educationexpense,
  percentageofeducationbudget      :req.body.percentageofeducationbudget,
  researchexpense                  :req.body.researchexpense,
  percentageofresearchbudget       :req.body.percentageofresearchbudget,
  salaryexpense                    :req.body.salaryexpense,
  percentageofsalarybudget         :req.body.percentageofsalarybudget,
  researchschoolarshipexpense      :req.body.researchschoolarshipexpense,
  percentageofresearchschoolarshipbudget:req.body.percentageofresearchschoolarshipbudget,
  transportationexpense            :req.body.transportationexpense,
  percentageoftransportationbudget :req.body.percentageoftransportationbudget,
  electricityexpense               :req.body.electricityexpense,
  percentageofelectricitybudget    :req.body.percentageofelectricitybudget,
  infrastructuralexpense           :req.body.infrastructuralexpense,
  percentageofinfrastructuralbudget:req.body.percentageofinfrastructuralbudget,
  otherexpense                     :req.body.otherexpense,
  percentageofotherbudget          :req.body.percentageofotherbudget,
  medicationexpense                :req.body.medicationexpense,
  percentageofmedication           :req.body.percentageofmedication,
  administrasionexpense            :req.body.administrasionexpense,
  percentageofadministrasionexpense:req.body.percentageofadministrasionexpense,
  pensonexpense                    :req.body.pensonexpense,
  percentageofpensonexpense        :req.body.percentageofpensonexpense,
  residentialadvantagemaleteacher  :req.body.residentialadvantagemaleteacher,
  residentialadvantagefemaleteacher:req.body.residentialadvantagefemaleteacher,
  residentialadvantagemaleofficer  :req.body.residentialadvantagemaleofficer,
  residentialadvantagefemaleofficer:req.body.residentialadvantagefemaleofficer,
  residentialadvantagemalethirdclassemploye:req.body.residentialadvantagemalethirdclassemploye,
  residentialadvantagefemalethirdclassemploye:req.body.residentialadvantagefemalethirdclassemploye,
  residentialadvantagemalefourthclassemploye :req.body.residentialadvantagemalefourthclassemploye,
  residentialadvantagefemalefourthclassemploye:req.body.residentialadvantagefemalefourthclassemploye
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('accountsectiondata',{accountsectionuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  accountsectionuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.accountsectionuserId=doc;
        next();
      }
  });
});

app.get('/accountsectionuser/:id/edit',function(req,res){
  res.render('accountsectiondataupdate',{accountsectionuser:req.accountsectionuserId});
});

// for updating data
app.post('/accountsectionuser/:id', function(req, res){
  accountsectionuser.updateOne({_id: req.params.id},
    { $set:{
  revenueallocation   :req.body.revenueallocation,
  developmentallocation:req.body.developmentallocation,
  ownallocation        :req.body.ownallocation,
  foreignsource        :req.body.foreignsource,
  rrevenueallocation   :req.body.rrevenueallocation,
  revenueallocationexpense:req.body.revenueallocationexpense,
  percentageofrevenueallocation:req.body.percentageofrevenueallocation,
  rdevelopmentallocation :req.body.rdevelopmentallocation,
  developmentallocationexpense :req.body.developmentallocationexpense,
  percentageofdevelopmentallocation:req.body.percentageofdevelopmentallocation,
  rownallocation                   :req.body.rownallocation,
  ownallocationexpense             :req.body.ownallocationexpense,
  percentageofownallocation        :req.body.percentageofownallocation,
  rforeignsource                   :req.body.rforeignsource,
  foreignsourceexpense             :req.body.foreignsourceexpense,
  percentageofforeignsource        :req.body.percentageofforeignsource,
  rothersourceallocation           :req.body.rothersourceallocation,
  othersource                      :req.body.othersource,
  percentageofother                :req.body.percentageofother,
  insolvencygrant                  :req.body.insolvencygrant,
  ownincome                        :req.body.ownincome,
  specialdevelopmentallocation     :req.body.specialdevelopmentallocation,
  otherallocation                  :req.body.otherallocation,
  educationexpense                 :req.body.educationexpense,
  percentageofeducationbudget      :req.body.percentageofeducationbudget,
  researchexpense                  :req.body.researchexpense,
  percentageofresearchbudget       :req.body.percentageofresearchbudget,
  salaryexpense                    :req.body.salaryexpense,
  percentageofsalarybudget         :req.body.percentageofsalarybudget,
  researchschoolarshipexpense      :req.body.researchschoolarshipexpense,
  percentageofresearchschoolarshipbudget:req.body.percentageofresearchschoolarshipbudget,
  transportationexpense            :req.body.transportationexpense,
  percentageoftransportationbudget :req.body.percentageoftransportationbudget,
  electricityexpense               :req.body.electricityexpense,
  percentageofelectricitybudget    :req.body.percentageofelectricitybudget,
  infrastructuralexpense           :req.body.infrastructuralexpense,
  percentageofinfrastructuralbudget:req.body.percentageofinfrastructuralbudget,
  otherexpense                     :req.body.otherexpense,
  percentageofotherbudget          :req.body.percentageofotherbudget,
  medicationexpense                :req.body.medicationexpense,
  percentageofmedication           :req.body.percentageofmedication,
  administrasionexpense            :req.body.administrasionexpense,
  percentageofadministrasionexpense:req.body.percentageofadministrasionexpense,
  pensonexpense                    :req.body.pensonexpense,
  percentageofpensonexpense        :req.body.percentageofpensonexpense,
  residentialadvantagemaleteacher  :req.body.residentialadvantagemaleteacher,
  residentialadvantagefemaleteacher:req.body.residentialadvantagefemaleteacher,
  residentialadvantagemaleofficer  :req.body.residentialadvantagemaleofficer,
  residentialadvantagefemaleofficer:req.body.residentialadvantagefemaleofficer,
  residentialadvantagemalethirdclassemploye:req.body.residentialadvantagemalethirdclassemploye,
  residentialadvantagefemalethirdclassemploye:req.body.residentialadvantagefemalethirdclassemploye,
  residentialadvantagemalefourthclassemploye :req.body.residentialadvantagemalefourthclassemploye,
  residentialadvantagefemalefourthclassemploye:req.body.residentialadvantagefemalefourthclassemploye
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/accountsectionuser/'+req.params.id);
          }
        });
});

app.get('/accountsectionuser/:id',function(req,res){
  res.render('accountsectiondata',{accountsectionuser:req.accountsectionuserId});
});
app.get('/accountsectionuser/:id/delete', function(req,res){
  accountsectionuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/accountsection');
  });
});





app.get('/computercentreadmin',function(req,res){
    res.render('computercentreadmin');
});

app.get('/computercentredata',function(req,res){
  if(req.query.computercentresession){
    computercentreuser.findOne({_id:req.query.computercentresession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('computercentredata',{computercentreuser:doc});
    }
  });
  }
});

app.post('/computercentreadmin',function(req,res){
  session=req.session;
  if(req.body.username=='computercentreadmin' && req.body.password=='computercentreadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/computercentre');
})

app.get('/computercentrelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/computercentreadmin');
  })
})

app.get('/computercentre',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('computercentre');
  }
  else
  {
    res.end('who are you');
  }
});


var computercentreSchema=new mongoose.Schema({
  _id                 :Number,
  totalstudentcomputer:Number,
  totalinternetconnectedcomputer:Number,
  totaladministratorcomputer    :Number,
  studentandcomputer  :String
});

var computercentreuser=mongoose.model('computercentre',computercentreSchema);

app.post('/computercentrenew',function(req,res){
  new computercentreuser({
  _id                 :req.body.session,
  totalstudentcomputer:req.body.totalstudentcomputer,
  totalinternetconnectedcomputer:req.body.totalinternetconnectedcomputer,
  totaladministratorcomputer    :req.body.totaladministratorcomputer,
  studentandcomputer  :req.body.studentandcomputer
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('computercentredata',{computercentreuser:doc});
  });
});

app.param('id',function(req,res,next,id){
  computercentreuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.computercentreuserId=doc;
        next();
      }
  });
});

app.get('/computercentreuser/:id/edit',function(req,res){
  res.render('computercentredataupdate',{computercentreuser:req.computercentreuserId});
});

// for updating data
app.post('/computercentreuser/:id', function(req, res){
  computercentreuser.updateOne({_id: req.params.id},
    { $set:{
  totalstudentcomputer:req.body.totalstudentcomputer,
  totalinternetconnectedcomputer:req.body.totalinternetconnectedcomputer,
  totaladministratorcomputer    :req.body.totaladministratorcomputer,
  studentandcomputer  :req.body.studentandcomputer
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/computercentreuser/'+req.params.id);
          }
        });
});

app.get('/computercentreuser/:id',function(req,res){
  res.render('computercentredata',{computercentreuser:req.computercentreuserId});
});
app.get('/computercentreuser/:id/delete', function(req,res){
  computercentreuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/computercentre');
  });
});






app.get('/educationsectionadmin',function(req,res){
    res.render('educationsectionadmin');
});

app.get('/educationsectiondata',function(req,res){
  if(req.query.educationsectionsession){
    educationsectionuser.findOne({_id:req.query.educationsectionsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('educationsectiondata',{educationsectionuser:doc});
    }
  });
  }
});

app.post('/educationsectionadmin',function(req,res){
  session=req.session;
  if(req.body.username=='educationsectionadmin' && req.body.password=='educationsectionadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/educationsection');
})

app.get('/educationsectionlogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/educationsectionadmin');
  })
})

app.get('/educationsection',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('educationsection');
  }
  else
  {
    res.end('who are you');
  }
});

var educationsectionSchema=new mongoose.Schema({
  _id                 :Number,
  cseforeignbscmalestudent:Number,
  cseforeignbsctfemalestudent:Number,
  gender1                    :String,
  faculty1                   :String,
  department1                :String,
  degree1                    :String,
  foreignstudentcountry1     :String,
  foreignschoolarshipbscstudent1:String,
  foreignownexpensebscstudent1:String,
  gender2                    :String,
  faculty2                   :String,
  department2                :String,
  degree2                    :String,
  foreignstudentcountry2     :String,
  foreignschoolarshipbscstudent2:String,
  foreignownexpensebscstudent2:String,
  gender3                    :String,
  faculty3                   :String,
  department3                :String,
  degree3                    :String,
  foreignstudentcountry3     :String,
  foreignschoolarshipbscstudent3:String,
  foreignownexpensebscstudent3:String,
  gender4                    :String,
  faculty4                   :String,
  department4                :String,
  degree4                    :String,
  foreignstudentcountry4     :String,
  foreignschoolarshipbscstudent4:String,
  foreignownexpensebscstudent4:String,
  gender5                    :String,
  faculty5                   :String,
  department5                :String,
  degree5                    :String,
  foreignstudentcountry5     :String,
  foreignschoolarshipbscstudent5:String,
  foreignownexpensebscstudent5:String,
  gender6                    :String,
  faculty6                   :String,
  department6                :String,
  degree6                    :String,
  foreignstudentcountry6     :String,
  foreignschoolarshipbscstudent6:String,
  foreignownexpensebscstudent6:String,
  gender7                    :String,
  faculty7                   :String,
  department7                :String,
  degree7                    :String,
  foreignstudentcountry7     :String,
  foreignschoolarshipbscstudent7:String,
  foreignownexpensebscstudent7:String,
  dropoutfaculty1             :String,
  dropoutdepartment1          :String,
  dropoutmalestudent1         :String,
  dropoutfemalestudent1       :String,
  dropoutfaculty2             :String,
  dropoutdepartment2          :String,
  dropoutmalestudent2         :String,
  dropoutfemalestudent2       :String,
  dropoutfaculty3             :String,
  dropoutdepartment3          :String,
  dropoutmalestudent3         :String,
  dropoutfemalestudent3       :String,
  dropoutfaculty4             :String,
  dropoutdepartment4          :String,
  dropoutmalestudent4         :String,
  dropoutfemalestudent4       :String,
  dropoutfaculty5             :String,
  dropoutdepartment5          :String,
  dropoutmalestudent5         :String,
  dropoutfemalestudent5       :String,
  fullfreemalestudent         :Number,
  fullfreefemalestudent       :Number,
  schoolarshipandfeloshipmalestudent:Number,
  schoolarshipandfeloshipfemalestudent:Number,
  schoolarshipmalestudent     :Number,
  schoolarshipfemalestudent   :Number,
  feloshipmalestudent         :Number,
  feloshipfemalestudent       :Number,
  otherschoolarshipmalestudent:Number,
  otherschoolarshipfemalestudent:Number,
  bscpasssession              :Number,
  bscadmitmalestudent         :Number,
  bscadmitfemalestudent       :Number,
  bscpassmalestudent          :Number,
  bscpassfemalestudent        :Number,
  percentageofbscpass         :String,
  mscpasssession              :Number,
  mscadmitmalestudent         :Number,
  mscadmitfemalestudent       :Number,
  mscpassmalestudent          :Number,
  mscpassfemalestudent        :Number,
  percentageofmscpass         :String,
  mfilpasssession             :Number,
  mfiladmitmalestudent        :Number,
  mfiladmitfemalestudent      :Number,
  mfilpassmalestudent         :Number,
  mfilpassfemalestudent       :Number,
  percentageofmfilpass        :String,
  phdpasssession              :Number,
  phdadmitmalestudent         :Number,
  phdadmitfemalestudent       :Number,
  phdpassmalestudent          :Number,
  phdpassfemalestudent        :Number,
  percentageofphdpass         :String
});

var educationsectionuser=mongoose.model('educationsection',educationsectionSchema);

app.post('/educationsectionnew',function(req,res){
  new educationsectionuser({
  _id                 :req.body.session,
  cseforeignbscmalestudent:req.body.cseforeignbscmalestudent,
  cseforeignbsctfemalestudent:req.body.cseforeignbsctfemalestudent,
  gender1                    :req.body.gender1,
  faculty1                   :req.body.faculty1,
  department1                :req.body.department1,
  degree1                    :req.body.degree1,
  foreignstudentcountry1     :req.body.foreignstudentcountry1,
  foreignschoolarshipbscstudent1:req.body.foreignschoolarshipbscstudent1,
  foreignownexpensebscstudent1:req.body.foreignownexpensebscstudent1,
  gender2                    :req.body.gender2,
  faculty2                   :req.body.faculty2,
  department2                :req.body.department2,
  degree2                    :req.body.degree2,
  foreignstudentcountry2     :req.body.foreignstudentcountry2,
  foreignschoolarshipbscstudent2:req.body.foreignschoolarshipbscstudent2,
  foreignownexpensebscstudent2:req.body.foreignownexpensebscstudent2,
  gender3                    :req.body.gender3,
  faculty3                   :req.body.faculty3,
  department3                :req.body.department3,
  degree3                    :req.body.degree3,
  foreignstudentcountry3     :req.body.foreignstudentcountry3,
  foreignschoolarshipbscstudent3:req.body.foreignschoolarshipbscstudent3,
  foreignownexpensebscstudent3:req.body.foreignownexpensebscstudent3,
  gender4                    :req.body.gender4,
  faculty4                   :req.body.faculty4,
  department4                :req.body.department4,
  degree4                    :req.body.degree4,
  foreignstudentcountry4     :req.body.foreignstudentcountry4,
  foreignschoolarshipbscstudent4:req.body.foreignschoolarshipbscstudent4,
  foreignownexpensebscstudent4:req.body.foreignownexpensebscstudent4,
  gender5                    :req.body.gender5,
  faculty5                   :req.body.faculty5,
  department5                :req.body.department5,
  degree5                    :req.body.degree5,
  foreignstudentcountry5     :req.body.foreignstudentcountry5,
  foreignschoolarshipbscstudent5:req.body.foreignschoolarshipbscstudent5,
  foreignownexpensebscstudent5:req.body.foreignownexpensebscstudent5,
  gender6                    :req.body.gender6,
  faculty6                   :req.body.faculty6,
  department6                :req.body.department6,
  degree6                    :req.body.degree6,
  foreignstudentcountry6     :req.body.foreignstudentcountry6,
  foreignschoolarshipbscstudent6:req.body.foreignschoolarshipbscstudent6,
  foreignownexpensebscstudent6:req.body.foreignownexpensebscstudent6,
  gender7                    :req.body.gender7,
  faculty7                   :req.body.faculty7,
  department7                :req.body.department7,
  degree7                    :req.body.degree7,
  foreignstudentcountry7     :req.body.foreignstudentcountry7,
  foreignschoolarshipbscstudent7:req.body.foreignschoolarshipbscstudent7,
  foreignownexpensebscstudent7:req.body.foreignownexpensebscstudent7,
  dropoutfaculty1             :req.body.dropoutfaculty1,
  dropoutdepartment1          :req.body.dropoutdepartment1,
  dropoutmalestudent1         :req.body.dropoutmalestudent1,
  dropoutfemalestudent1       :req.body.dropoutfemalestudent1,
  dropoutfaculty2             :req.body.dropoutfaculty2,
  dropoutdepartment2          :req.body.dropoutdepartment2,
  dropoutmalestudent2         :req.body.dropoutmalestudent2,
  dropoutfemalestudent2       :req.body.dropoutfemalestudent2,
  dropoutfaculty3             :req.body.dropoutfaculty3,
  dropoutdepartment3          :req.body.dropoutdepartment3,
  dropoutmalestudent3         :req.body.dropoutmalestudent3,
  dropoutfemalestudent3       :req.body.dropoutfemalestudent3,
  dropoutfaculty4             :req.body.dropoutfaculty4,
  dropoutdepartment4          :req.body.dropoutdepartment4,
  dropoutmalestudent4         :req.body.dropoutmalestudent4,
  dropoutfemalestudent4       :req.body.dropoutfemalestudent4,
  dropoutfaculty5             :req.body.dropoutfaculty5,
  dropoutdepartment5          :req.body.dropoutdepartment5,
  dropoutmalestudent5         :req.body.dropoutmalestudent5,
  dropoutfemalestudent5       :req.body.dropoutfemalestudent5,
  fullfreemalestudent         :req.body.fullfreemalestudent,
  fullfreefemalestudent       :req.body.fullfreefemalestudent,
  schoolarshipandfeloshipmalestudent:req.body.schoolarshipandfeloshipmalestudent,
  schoolarshipandfeloshipfemalestudent:req.body.schoolarshipandfeloshipfemalestudent,
  schoolarshipmalestudent     :req.body.schoolarshipmalestudent,
  schoolarshipfemalestudent   :req.body.schoolarshipfemalestudent,
  feloshipmalestudent         :req.body.feloshipmalestudent,
  feloshipfemalestudent       :req.body.feloshipfemalestudent,
  otherschoolarshipmalestudent:req.body.otherschoolarshipmalestudent,
  otherschoolarshipfemalestudent:req.body.otherschoolarshipfemalestudent,
  bscpasssession              :req.body.bscpasssession,
  bscadmitmalestudent         :req.body.bscadmitmalestudent,
  bscadmitfemalestudent       :req.body.bscadmitfemalestudent,
  bscpassmalestudent          :req.body.bscpassmalestudent,
  bscpassfemalestudent        :req.body.bscpassfemalestudent,
  percentageofbscpass         :req.body.percentageofbscpass,
  mscpasssession              :req.body.mscpasssession,
  mscadmitmalestudent         :req.body.mscadmitmalestudent,
  mscadmitfemalestudent       :req.body.mscadmitfemalestudent,
  mscpassmalestudent          :req.body.mscpassmalestudent,
  mscpassfemalestudent        :req.body.mscpassfemalestudent,
  percentageofmscpass         :req.body.percentageofmscpass,
  mfilpasssession             :req.body.mfilpasssession,
  mfiladmitmalestudent        :req.body.mfiladmitmalestudent,
  mfiladmitfemalestudent      :req.body.mfiladmitfemalestudent,
  mfilpassmalestudent         :req.body.mfilpassmalestudent,
  mfilpassfemalestudent       :req.body.mfilpassfemalestudent,
  percentageofmfilpass        :req.body.percentageofmfilpass,
  phdpasssession              :req.body.phdpasssession,
  phdadmitmalestudent         :req.body.phdadmitmalestudent,
  phdadmitfemalestudent       :req.body.phdadmitfemalestudent,
  phdpassmalestudent          :req.body.phdpassmalestudent,
  phdpassfemalestudent        :req.body.phdpassfemalestudent,
  percentageofphdpass         :req.body.percentageofphdpass
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('educationsectiondata',{educationsectionuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  educationsectionuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.educationsectionuserId=doc;
        next();
      }
  });
});

app.get('/educationsectionuser/:id/edit',function(req,res){
  res.render('educationsectiondataupdate',{educationsectionuser:req.educationsectionuserId});
});

// for updating data
app.post('/educationsectionuser/:id', function(req, res){
  educationsectionuser.updateOne({_id: req.params.id},
    { $set:{
  cseforeignbscmalestudent:req.body.cseforeignbscmalestudent,
  cseforeignbsctfemalestudent:req.body.cseforeignbsctfemalestudent,
  gender1                    :req.body.gender1,
  faculty1                   :req.body.faculty1,
  department1                :req.body.department1,
  degree1                    :req.body.degree1,
  foreignstudentcountry1     :req.body.foreignstudentcountry1,
  foreignschoolarshipbscstudent1:req.body.foreignschoolarshipbscstudent1,
  foreignownexpensebscstudent1:req.body.foreignownexpensebscstudent1,
  gender2                    :req.body.gender2,
  faculty2                   :req.body.faculty2,
  department2                :req.body.department2,
  degree2                    :req.body.degree2,
  foreignstudentcountry2     :req.body.foreignstudentcountry2,
  foreignschoolarshipbscstudent2:req.body.foreignschoolarshipbscstudent2,
  foreignownexpensebscstudent2:req.body.foreignownexpensebscstudent2,
  gender3                    :req.body.gender3,
  faculty3                   :req.body.faculty3,
  department3                :req.body.department3,
  degree3                    :req.body.degree3,
  foreignstudentcountry3     :req.body.foreignstudentcountry3,
  foreignschoolarshipbscstudent3:req.body.foreignschoolarshipbscstudent3,
  foreignownexpensebscstudent3:req.body.foreignownexpensebscstudent3,
  gender4                    :req.body.gender4,
  faculty4                   :req.body.faculty4,
  department4                :req.body.department4,
  degree4                    :req.body.degree4,
  foreignstudentcountry4     :req.body.foreignstudentcountry4,
  foreignschoolarshipbscstudent4:req.body.foreignschoolarshipbscstudent4,
  foreignownexpensebscstudent4:req.body.foreignownexpensebscstudent4,
  gender5                    :req.body.gender5,
  faculty5                   :req.body.faculty5,
  department5                :req.body.department5,
  degree5                    :req.body.degree5,
  foreignstudentcountry5     :req.body.foreignstudentcountry5,
  foreignschoolarshipbscstudent5:req.body.foreignschoolarshipbscstudent5,
  foreignownexpensebscstudent5:req.body.foreignownexpensebscstudent5,
  gender6                    :req.body.gender6,
  faculty6                   :req.body.faculty6,
  department6                :req.body.department6,
  degree6                    :req.body.degree6,
  foreignstudentcountry6     :req.body.foreignstudentcountry6,
  foreignschoolarshipbscstudent6:req.body.foreignschoolarshipbscstudent6,
  foreignownexpensebscstudent6:req.body.foreignownexpensebscstudent6,
  gender7                    :req.body.gender7,
  faculty7                   :req.body.faculty7,
  department7                :req.body.department7,
  degree7                    :req.body.degree7,
  foreignstudentcountry7     :req.body.foreignstudentcountry7,
  foreignschoolarshipbscstudent7:req.body.foreignschoolarshipbscstudent7,
  foreignownexpensebscstudent7:req.body.foreignownexpensebscstudent7,
  dropoutfaculty1             :req.body.dropoutfaculty1,
  dropoutdepartment1          :req.body.dropoutdepartment1,
  dropoutmalestudent1         :req.body.dropoutmalestudent1,
  dropoutfemalestudent1       :req.body.dropoutfemalestudent1,
  dropoutfaculty2             :req.body.dropoutfaculty2,
  dropoutdepartment2          :req.body.dropoutdepartment2,
  dropoutmalestudent2         :req.body.dropoutmalestudent2,
  dropoutfemalestudent2       :req.body.dropoutfemalestudent2,
  dropoutfaculty3             :req.body.dropoutfaculty3,
  dropoutdepartment3          :req.body.dropoutdepartment3,
  dropoutmalestudent3         :req.body.dropoutmalestudent3,
  dropoutfemalestudent3       :req.body.dropoutfemalestudent3,
  dropoutfaculty4             :req.body.dropoutfaculty4,
  dropoutdepartment4          :req.body.dropoutdepartment4,
  dropoutmalestudent4         :req.body.dropoutmalestudent4,
  dropoutfemalestudent4       :req.body.dropoutfemalestudent4,
  dropoutfaculty5             :req.body.dropoutfaculty5,
  dropoutdepartment5          :req.body.dropoutdepartment5,
  dropoutmalestudent5         :req.body.dropoutmalestudent5,
  dropoutfemalestudent5       :req.body.dropoutfemalestudent5,
  fullfreemalestudent         :req.body.fullfreemalestudent,
  fullfreefemalestudent       :req.body.fullfreefemalestudent,
  schoolarshipandfeloshipmalestudent:req.body.schoolarshipandfeloshipmalestudent,
  schoolarshipandfeloshipfemalestudent:req.body.schoolarshipandfeloshipfemalestudent,
  schoolarshipmalestudent     :req.body.schoolarshipmalestudent,
  schoolarshipfemalestudent   :req.body.schoolarshipfemalestudent,
  feloshipmalestudent         :req.body.feloshipmalestudent,
  feloshipfemalestudent       :req.body.feloshipfemalestudent,
  otherschoolarshipmalestudent:req.body.otherschoolarshipmalestudent,
  otherschoolarshipfemalestudent:req.body.otherschoolarshipfemalestudent,
  bscpasssession              :req.body.bscpasssession,
  bscadmitmalestudent         :req.body.bscadmitmalestudent,
  bscadmitfemalestudent       :req.body.bscadmitfemalestudent,
  bscpassmalestudent          :req.body.bscpassmalestudent,
  bscpassfemalestudent        :req.body.bscpassfemalestudent,
  percentageofbscpass         :req.body.percentageofbscpass,
  mscpasssession              :req.body.mscpasssession,
  mscadmitmalestudent         :req.body.mscadmitmalestudent,
  mscadmitfemalestudent       :req.body.mscadmitfemalestudent,
  mscpassmalestudent          :req.body.mscpassmalestudent,
  mscpassfemalestudent        :req.body.mscpassfemalestudent,
  percentageofmscpass         :req.body.percentageofmscpass,
  mfilpasssession             :req.body.mfilpasssession,
  mfiladmitmalestudent        :req.body.mfiladmitmalestudent,
  mfiladmitfemalestudent      :req.body.mfiladmitfemalestudent,
  mfilpassmalestudent         :req.body.mfilpassmalestudent,
  mfilpassfemalestudent       :req.body.mfilpassfemalestudent,
  percentageofmfilpass        :req.body.percentageofmfilpass,
  phdpasssession              :req.body.phdpasssession,
  phdadmitmalestudent         :req.body.phdadmitmalestudent,
  phdadmitfemalestudent       :req.body.phdadmitfemalestudent,
  phdpassmalestudent          :req.body.phdpassmalestudent,
  phdpassfemalestudent        :req.body.phdpassfemalestudent,
  percentageofphdpass         :req.body.percentageofphdpass
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/educationsectionuser/'+req.params.id);
          }
        });
});

app.get('/educationsectionuser/:id',function(req,res){
  res.render('educationsectiondata',{educationsectionuser:req.educationsectionuserId});
});
app.get('/educationsectionuser/:id/delete', function(req,res){
  educationsectionuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/educationsection');
  });
});







app.get('/engineeringsectionadmin',function(req,res){
    res.render('engineeringsectionadmin');
});

app.get('/engineeringsectiondata',function(req,res){
  if(req.query.engineeringsectionsession){
    engineeringsectionuser.findOne({_id:req.query.engineeringsectionsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('engineeringsectiondata',{engineeringsectionuser:doc});
    }
  });
  }
});

app.post('/engineeringsectionadmin',function(req,res){
  session=req.session;
  if(req.body.username=='engineeringsectionadmin' && req.body.password=='engineeringsectionadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/engineeringsection');
})

app.get('/engineeringsectionlogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/engineeringsectionadmin');
  })
})

app.get('/engineeringsection',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('engineeringsection');
  }
  else
  {
    res.end('who are you');
  }
});

var engineeringsectionSchema=new mongoose.Schema({
  _id                 :Number,
  totalclassroom      :Number,
  totalclassroomvolume:String,
  totaladministratorroom:Number,
  totaladministratorroomvolume:String,
  totallibraryroom       :Number,
  totalalibraryroomvolume:String,
  totallabratoryroom     :Number,
  totallabratoryroomvolume:String,
  totalhallroom           :Number,
  totalhallroomvolume     :String,
  totalauditorium         :Number,
  totalauditoriumvolume   :String,
  totalexerciseroom       :Number,
  totalexerciseroomvolume :String,
  totalplayground         :Number,
  totalplaygroundvolume   :String,
  totalswimingpool        :Number,
  totalswimingpoolvolume  :String,
  totalguesthouse         :Number,
  totalguesthousevolume   :String,
  totalteacherresidentialaccommodation:Number,
  totalteacherresidentialaccommodationvolume:String,
  totalofficerresidentialaccommodation      :Number,
  totalofficerresidentialaccommodationvolume:String,
  totalemployeresidentialaccommodation      :Number,
  totalemployeresidentialaccommodationvolume:String,
  vcbanglo                                  :Number,
  vcbanglovolume                            :String
});

var engineeringsectionuser=mongoose.model('engineeringsection',engineeringsectionSchema);

app.post('/engineeringsectionnew',function(req,res){
  new engineeringsectionuser({
  _id                 :req.body.session,
  totalclassroom      :req.body.totalclassroom,
  totalclassroomvolume:req.body.totalclassroomvolume,
  totaladministratorroom:req.body.totaladministratorroom,
  totaladministratorroomvolume:req.body.totaladministratorroomvolume,
  totallibraryroom       :req.body.totallibraryroom,
  totalalibraryroomvolume:req.body.totalalibraryroomvolume,
  totallabratoryroom     :req.body.totallabratoryroom,
  totallabratoryroomvolume:req.body.totallabratoryroomvolume,
  totalhallroom           :req.body.totalhallroom,
  totalhallroomvolume     :req.body.totalhallroomvolume,
  totalauditorium         :req.body.totalauditorium,
  totalauditoriumvolume   :req.body.totalauditoriumvolume,
  totalexerciseroom       :req.body.totalexerciseroom,
  totalexerciseroomvolume :req.body.totalexerciseroomvolume,
  totalplayground         :req.body.totalplayground,
  totalplaygroundvolume   :req.body.totalplaygroundvolume,
  totalswimingpool        :req.body.totalswimingpool,
  totalswimingpoolvolume  :req.body.totalswimingpoolvolume,
  totalguesthouse         :req.body.totalguesthouse,
  totalguesthousevolume   :req.body.totalguesthousevolume,
  totalteacherresidentialaccommodation:req.body.totalteacherresidentialaccommodation,
  totalteacherresidentialaccommodationvolume:req.body.totalteacherresidentialaccommodationvolume,
  totalofficerresidentialaccommodation      :req.body.totalofficerresidentialaccommodation,
  totalofficerresidentialaccommodationvolume:req.body.totalofficerresidentialaccommodationvolume,
  totalemployeresidentialaccommodation      :req.body.totalemployeresidentialaccommodation,
  totalemployeresidentialaccommodationvolume:req.body.totalemployeresidentialaccommodationvolume,
  vcbanglo                                  :req.body.vcbanglo,
  vcbanglovolume                            :req.body.vcbanglovolume
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('engineeringsectiondata',{engineeringsectionuser:doc});
    
  });
});


app.param('id',function(req,res,next,id){
  engineeringsectionuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.engineeringsectionuserId=doc;
        next();
      }
  });
});

app.get('/engineeringsectionuser/:id/edit',function(req,res){
  res.render('engineeringsectiondataupdate',{engineeringsectionuser:req.engineeringsectionuserId});
});

// for updating data
app.post('/engineeringsectionuser/:id', function(req, res){
  engineeringsectionuser.updateOne({_id: req.params.id},
    { $set:{
  totalclassroom      :req.body.totalclassroom,
  totalclassroomvolume:req.body.totalclassroomvolume,
  totaladministratorroom:req.body.totaladministratorroom,
  totaladministratorroomvolume:req.body.totaladministratorroomvolume,
  totallibraryroom       :req.body.totallibraryroom,
  totalalibraryroomvolume:req.body.totalalibraryroomvolume,
  totallabratoryroom     :req.body.totallabratoryroom,
  totallabratoryroomvolume:req.body.totallabratoryroomvolume,
  totalhallroom           :req.body.totalhallroom,
  totalhallroomvolume     :req.body.totalhallroomvolume,
  totalauditorium         :req.body.totalauditorium,
  totalauditoriumvolume   :req.body.totalauditoriumvolume,
  totalexerciseroom       :req.body.totalexerciseroom,
  totalexerciseroomvolume :req.body.totalexerciseroomvolume,
  totalplayground         :req.body.totalplayground,
  totalplaygroundvolume   :req.body.totalplaygroundvolume,
  totalswimingpool        :req.body.totalswimingpool,
  totalswimingpoolvolume  :req.body.totalswimingpoolvolume,
  totalguesthouse         :req.body.totalguesthouse,
  totalguesthousevolume   :req.body.totalguesthousevolume,
  totalteacherresidentialaccommodation:req.body.totalteacherresidentialaccommodation,
  totalteacherresidentialaccommodationvolume:req.body.totalteacherresidentialaccommodationvolume,
  totalofficerresidentialaccommodation      :req.body.totalofficerresidentialaccommodation,
  totalofficerresidentialaccommodationvolume:req.body.totalofficerresidentialaccommodationvolume,
  totalemployeresidentialaccommodation      :req.body.totalemployeresidentialaccommodation,
  totalemployeresidentialaccommodationvolume:req.body.totalemployeresidentialaccommodationvolume,
  vcbanglo                                  :req.body.vcbanglo,
  vcbanglovolume                            :req.body.vcbanglovolume
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/engineeringsectionuser/'+req.params.id);
          }
        });
});

app.get('/engineeringsectionuser/:id',function(req,res){
  res.render('engineeringsectiondata',{engineeringsectionuser:req.engineeringsectionuserId});
});
app.get('/engineeringsectionuser/:id/delete', function(req,res){
  engineeringsectionuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/engineeringsection');
  });
});





app.get('/foundationsectionadmin',function(req,res){
    res.render('foundationsectionadmin');
});

app.get('/foundationsectiondata',function(req,res){
  if(req.query.foundationsectionsession){
    foundationsectionuser.findOne({_id:req.query.foundationsectionsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('foundationsectiondata',{foundationsectionuser:doc});
    }
  });
  }
});

app.post('/foundationsectionadmin',function(req,res){
  session=req.session;
  if(req.body.username=='foundationsectionadmin' && req.body.password=='foundationsectionadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/foundationsection');
})

app.get('/foundationsectionlogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/foundationsectionadmin');
  })
})

app.get('/foundationsection',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('foundationsection');
  }
  else
  {
    res.end('who are you');
  }
});

var foundationsectionSchema=new mongoose.Schema({
  _id                 :Number,
  totalprofessorapproveseat:Number,
  approvemaleprofessor     :Number,
  approvefemaleprofessor   :Number,
  parttimemaleprofessor    :Number,
  parttimefemaleprofessor  :Number,
  totalmaleprofessor       :Number,
  totalfemaleprofessor     :Number,
  totalassociateprofessorapproveseat:Number,
  approvemaleassociateprofessor     :Number,
  approvefemaleassociateprofessor   :Number,
  parttimemaleassociateprofessor    :Number,
  parttimefemaleassociateprofessor  :Number,
  totalmaleassociateprofessor       :Number,
  totalfemaleassociateprofessor     :Number,
  totalassistantprofessorapproveseat:Number,
  approvemaleassistantprofessor     :Number,
  approvefemaleassistantprofessor   :Number,
  parttimemaleassistantprofessor    :Number,
  parttimefemaleassistantprofessor  :Number,
  totalmaleassistantprofessor       :Number,
  totalfemaleassistantprofessor     :Number,
  totallecturarapproveseat          :Number,
  approvemalelecturar               :Number,
  approvefemalelecturar             :Number,
  parttimemalelecturar              :Number,
  parttimefemalelecturar            :Number,
  totalmalelecturar                 :Number,
  totalfemalelecturar               :Number,
  totalteachingassistantapproveseat :Number,
  approvemaleteachingassistant      :Number,
  approvefemaleteachingassistant    :Number,
  parttimemaleteachingassistant     :Number,
  parttimefemaleteachingassistant   :Number,
  totalmaleteachingassistant        :Number,
  totalfemaleteachingassistant      :Number,
  totalvisitingprofessorapproveseat :Number,
  approvemalevisitingprofessor      :Number,
  approvefemalevisitingprofessor    :Number,
  parttimemalevisitingprofessor     :Number,
  parttimefemalevisitingprofessor   :Number,
  totalmalevisitingprofessor        :Number,
  totalfemalevisitingprofessor      :Number,
  totalhonoraryprofessorapproveseat :Number,
  approvemalehonoraryprofessor      :Number,
  approvefemalehonoraryprofessor    :Number,
  parttimemalehonoraryprofessor     :Number,
  parttimefemalehonoraryprofessor   :Number,
  totalmalehonoraryprofessor        :Number,
  totalfemalehonoraryprofessor      :Number,
  totalsupernumararyprofessorapproveseat:Number,
  approvemalesupernumararyprofessor :Number,
  approvefemalesupernumararyprofessor:Number,
  parttimemalesupernumararyprofessor:Number,
  parttimefemalesupernumararyprofessor:Number,
  totalmalesupernumararyprofessor    :Number,
  totalfemalesupernumararyprofessor  :Number,
  totalemeritusprofessorapproveseat  :Number,
  approvemaleemeritusprofessor       :Number,
  approvefemaleemeritusprofessor     :Number,
  parttimemaleemeritusprofessor      :Number,
  parttimefemaleemeritusprofessor    :Number,
  totalmaleemeritusprofessor         :Number,
  totalfemaleemeritusprofessor       :Number,
  totalnationalprofessorapproveseat  :Number,
  approvemalenationalprofessor       :Number,
  approvefemalenationalprofessor     :Number,
  parttimemalenationalprofessor      :Number,
  parttimefemalenationalprofessor    :Number,
  totalmalenationalprofessor         :Number,
  totalfemalenationalprofessor       :Number,
  workingmaleteacher                 :Number,
  workingfemaleteacher               :Number,
  absentmaleteacher                  :Number,
  absentfemaleteacher                :Number,
  maleeducationvacationteacher       :Number,
  femaleeducationvacationteacher     :Number,
  maletransmissionteacher            :Number,
  femaletransmissionteacher          :Number,
  maleliyenteacher                   :Number,
  femaleliyenteacher                 :Number,
  malefreesalaryteacher              :Number,
  femalefreesalaryteacher            :Number,
  maleunapproveteacher               :Number,
  femaleunapproveteacher             :Number,
  maleparttimeteacher                :Number,
  femaleparttimeteacher              :Number,
  totalpermanentofficerapproveseat   :Number,
  permanentmaleofficer               :Number,
  permanentfemaleofficer             :Number,
  totalcontactualofficerapproveseat  :Number,
  contactualmaleofficer              :Number,
  contactualfemaleofficer            :Number,
  totalthirdclasspermanentemployeapproveseat:Number,
  thirdclasspermanentmaleemploye     :Number,
  thirdclasspermanentfemaleemploye   :Number,
  totalfourthclasspermanentemployeapproveseat:Number,
  fourthclasspermanentmaleemploye    :Number,
  fourthclasspermanentfemaleemploye  :Number,
  totaladhokemployeapproveseat       :Number,
  adhokmaleeemploye                  :Number,
  adhokfemaleeemploye                :Number,
  totaldailypresentemployeapproveseat:Number,
  dailypresentmaleeemploye           :Number,
  dailypresentfemaleeemploye         :Number

});

var foundationsectionuser=mongoose.model('foundationsection',foundationsectionSchema);

app.post('/foundationsectionnew',function(req,res){
  new foundationsectionuser({
  _id                 :req.body.session,
  totalprofessorapproveseat:req.body.totalprofessorapproveseat,
  approvemaleprofessor     :req.body.approvemaleprofessor,
  approvefemaleprofessor   :req.body.approvefemaleprofessor,
  parttimemaleprofessor    :req.body.parttimemaleprofessor,
  parttimefemaleprofessor  :req.body.parttimefemaleprofessor,
  totalmaleprofessor       :req.body.totalmaleprofessor,
  totalfemaleprofessor     :req.body.totalfemaleprofessor,
  totalassociateprofessorapproveseat:req.body.totalassociateprofessorapproveseat,
  approvemaleassociateprofessor     :req.body.approvemaleassociateprofessor,
  approvefemaleassociateprofessor   :req.body.approvefemaleassociateprofessor,
  parttimemaleassociateprofessor    :req.body.parttimemaleassociateprofessor,
  parttimefemaleassociateprofessor  :req.body.parttimefemaleassociateprofessor,
  totalmaleassociateprofessor       :req.body.totalmaleassociateprofessor,
  totalfemaleassociateprofessor     :req.body.totalfemaleassociateprofessor,
  totalassistantprofessorapproveseat:req.body.totalassistantprofessorapproveseat,
  approvemaleassistantprofessor     :req.body.approvemaleassistantprofessor,
  approvefemaleassistantprofessor   :req.body.approvefemaleassistantprofessor,
  parttimemaleassistantprofessor    :req.body.parttimemaleassistantprofessor,
  parttimefemaleassistantprofessor  :req.body.parttimefemaleassistantprofessor,
  totalmaleassistantprofessor       :req.body.totalmaleassistantprofessor,
  totalfemaleassistantprofessor     :req.body.totalfemaleassistantprofessor,
  totallecturarapproveseat          :req.body.totallecturarapproveseat,
  approvemalelecturar               :req.body.approvemalelecturar,
  approvefemalelecturar             :req.body.approvefemalelecturar,
  parttimemalelecturar              :req.body.parttimemalelecturar,
  parttimefemalelecturar            :req.body.parttimefemalelecturar,
  totalmalelecturar                 :req.body.totalmalelecturar,
  totalfemalelecturar               :req.body.totalfemalelecturar,
  totalteachingassistantapproveseat :req.body.totalteachingassistantapproveseat,
  approvemaleteachingassistant      :req.body.approvemaleteachingassistant,
  approvefemaleteachingassistant    :req.body.approvefemaleteachingassistant,
  parttimemaleteachingassistant     :req.body.parttimemaleteachingassistant,
  parttimefemaleteachingassistant   :req.body.parttimefemaleteachingassistant,
  totalmaleteachingassistant        :req.body.totalmaleteachingassistant,
  totalfemaleteachingassistant      :req.body.totalfemaleteachingassistant,
  totalvisitingprofessorapproveseat :req.body.totalvisitingprofessorapproveseat,
  approvemalevisitingprofessor      :req.body.approvemalevisitingprofessor,
  approvefemalevisitingprofessor    :req.body.approvefemalevisitingprofessor,
  parttimemalevisitingprofessor     :req.body.parttimemalevisitingprofessor,
  parttimefemalevisitingprofessor   :req.body.parttimefemalevisitingprofessor,
  totalmalevisitingprofessor        :req.body.totalmalevisitingprofessor,
  totalfemalevisitingprofessor      :req.body.totalfemalevisitingprofessor,
  totalhonoraryprofessorapproveseat :req.body.totalhonoraryprofessorapproveseat,
  approvemalehonoraryprofessor      :req.body.approvemalehonoraryprofessor,
  approvefemalehonoraryprofessor    :req.body.approvefemalehonoraryprofessor,
  parttimemalehonoraryprofessor     :req.body.parttimemalehonoraryprofessor,
  parttimefemalehonoraryprofessor   :req.body.parttimefemalehonoraryprofessor,
  totalmalehonoraryprofessor        :req.body.totalmalehonoraryprofessor,
  totalfemalehonoraryprofessor      :req.body.totalfemalehonoraryprofessor,
  totalsupernumararyprofessorapproveseat:req.body.totalsupernumararyprofessorapproveseat,
  approvemalesupernumararyprofessor :req.body.approvemalesupernumararyprofessor,
  approvefemalesupernumararyprofessor:req.body.approvefemalesupernumararyprofessor,
  parttimemalesupernumararyprofessor:req.body.parttimemalesupernumararyprofessor,
  parttimefemalesupernumararyprofessor:req.body.parttimefemalesupernumararyprofessor,
  totalmalesupernumararyprofessor    :req.body.totalmalesupernumararyprofessor,
  totalfemalesupernumararyprofessor  :req.body.totalfemalesupernumararyprofessor,
  totalemeritusprofessorapproveseat  :req.body.totalemeritusprofessorapproveseat,
  approvemaleemeritusprofessor       :req.body.approvemaleemeritusprofessor,
  approvefemaleemeritusprofessor     :req.body.approvefemaleemeritusprofessor,
  parttimemaleemeritusprofessor      :req.body.parttimemaleemeritusprofessor,
  parttimefemaleemeritusprofessor    :req.body.parttimefemaleemeritusprofessor,
  totalmaleemeritusprofessor         :req.body.totalmaleemeritusprofessor,
  totalfemaleemeritusprofessor       :req.body.totalfemaleemeritusprofessor,
  totalnationalprofessorapproveseat  :req.body.totalnationalprofessorapproveseat,
  approvemalenationalprofessor       :req.body.approvemalenationalprofessor,
  approvefemalenationalprofessor     :req.body.approvefemalenationalprofessor,
  parttimemalenationalprofessor      :req.body.parttimemalenationalprofessor,
  parttimefemalenationalprofessor    :req.body.parttimefemalenationalprofessor,
  totalmalenationalprofessor         :req.body.totalmalenationalprofessor,
  totalfemalenationalprofessor       :req.body.totalfemalenationalprofessor,
  workingmaleteacher                 :req.body.workingmaleteacher,
  workingfemaleteacher               :req.body.workingfemaleteacher,
  absentmaleteacher                 :req.body.absentmaleteacher,
  absentfemaleteacher               :req.body.absentfemaleteacher,
  maleeducationvacationteacher       :req.body.maleeducationvacationteacher,
  femaleeducationvacationteacher     :req.body.femaleeducationvacationteacher,
  maletransmissionteacher            :req.body.maletransmissionteacher,
  femaletransmissionteacher          :req.body.femaletransmissionteacher,
  maleliyenteacher                   :req.body.maleliyenteacher,
  femaleliyenteacher                 :req.body.femaleliyenteacher,
  malefreesalaryteacher              :req.body.malefreesalaryteacher,
  femalefreesalaryteacher            :req.body.femalefreesalaryteacher,
  maleunapproveteacher               :req.body.maleunapproveteacher,
  femaleunapproveteacher             :req.body.femaleunapproveteacher,
  maleparttimeteacher                :req.body.maleparttimeteacher,
  femaleparttimeteacher              :req.body.femaleparttimeteacher,
  totalpermanentofficerapproveseat   :req.body.totalpermanentofficerapproveseat,
  permanentmaleofficer               :req.body.permanentmaleofficer,
  permanentfemaleofficer             :req.body.permanentfemaleofficer,
  totalcontactualofficerapproveseat  :req.body.totalcontactualofficerapproveseat,
  contactualmaleofficer              :req.body.contactualmaleofficer,
  contactualfemaleofficer            :req.body.contactualfemaleofficer,
  totalthirdclasspermanentemployeapproveseat:req.body.totalthirdclasspermanentemployeapproveseat,
  thirdclasspermanentmaleemploye     :req.body.thirdclasspermanentmaleemploye,
  thirdclasspermanentfemaleemploye   :req.body.thirdclasspermanentfemaleemploye,
  totalfourthclasspermanentemployeapproveseat:req.body.totalfourthclasspermanentemployeapproveseat,
  fourthclasspermanentmaleemploye    :req.body.fourthclasspermanentmaleemploye,
  fourthclasspermanentfemaleemploye  :req.body.fourthclasspermanentfemaleemploye,
  totaladhokemployeapproveseat       :req.body.totaladhokemployeapproveseat,
  adhokmaleeemploye                  :req.body.adhokmaleeemploye,
  adhokfemaleeemploye                :req.body.adhokfemaleeemploye,
  totaldailypresentemployeapproveseat:req.body.totaldailypresentemployeapproveseat,
  dailypresentmaleeemploye           :req.body.dailypresentmaleeemploye,
  dailypresentfemaleeemploye         :req.body.dailypresentfemaleeemploye

  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('foundationsectiondata',{foundationsectionuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  foundationsectionuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.foundationsectionuserId=doc;
        next();
      }
  });
});

app.get('/foundationsectionuser/:id/edit',function(req,res){
  res.render('foundationsectiondataupdate',{foundationsectionuser:req.foundationsectionuserId});
});

// for updating data
app.post('/foundationsectionuser/:id', function(req, res){
  foundationsectionuser.updateOne({_id: req.params.id},
    { $set:{
  
  totalprofessorapproveseat:req.body.totalprofessorapproveseat,
  approvemaleprofessor     :req.body.approvemaleprofessor,
  approvefemaleprofessor   :req.body.approvefemaleprofessor,
  parttimemaleprofessor    :req.body.parttimemaleprofessor,
  parttimefemaleprofessor  :req.body.parttimefemaleprofessor,
  totalmaleprofessor       :req.body.totalmaleprofessor,
  totalfemaleprofessor     :req.body.totalfemaleprofessor,
  totalassociateprofessorapproveseat:req.body.totalassociateprofessorapproveseat,
  approvemaleassociateprofessor     :req.body.approvemaleassociateprofessor,
  approvefemaleassociateprofessor   :req.body.approvefemaleassociateprofessor,
  parttimemaleassociateprofessor    :req.body.parttimemaleassociateprofessor,
  parttimefemaleassociateprofessor  :req.body.parttimefemaleassociateprofessor,
  totalmaleassociateprofessor       :req.body.totalmaleassociateprofessor,
  totalfemaleassociateprofessor     :req.body.totalfemaleassociateprofessor,
  totalassistantprofessorapproveseat:req.body.totalassistantprofessorapproveseat,
  approvemaleassistantprofessor     :req.body.approvemaleassistantprofessor,
  approvefemaleassistantprofessor   :req.body.approvefemaleassistantprofessor,
  parttimemaleassistantprofessor    :req.body.parttimemaleassistantprofessor,
  parttimefemaleassistantprofessor  :req.body.parttimefemaleassistantprofessor,
  totalmaleassistantprofessor       :req.body.totalmaleassistantprofessor,
  totalfemaleassistantprofessor     :req.body.totalfemaleassistantprofessor,
  totallecturarapproveseat          :req.body.totallecturarapproveseat,
  approvemalelecturar               :req.body.approvemalelecturar,
  approvefemalelecturar             :req.body.approvefemalelecturar,
  parttimemalelecturar              :req.body.parttimemalelecturar,
  parttimefemalelecturar            :req.body.parttimefemalelecturar,
  totalmalelecturar                 :req.body.totalmalelecturar,
  totalfemalelecturar               :req.body.totalfemalelecturar,
  totalteachingassistantapproveseat :req.body.totalteachingassistantapproveseat,
  approvemaleteachingassistant      :req.body.approvemaleteachingassistant,
  approvefemaleteachingassistant    :req.body.approvefemaleteachingassistant,
  parttimemaleteachingassistant     :req.body.parttimemaleteachingassistant,
  parttimefemaleteachingassistant   :req.body.parttimefemaleteachingassistant,
  totalmaleteachingassistant        :req.body.totalmaleteachingassistant,
  totalfemaleteachingassistant      :req.body.totalfemaleteachingassistant,
  totalvisitingprofessorapproveseat :req.body.totalvisitingprofessorapproveseat,
  approvemalevisitingprofessor      :req.body.approvemalevisitingprofessor,
  approvefemalevisitingprofessor    :req.body.approvefemalevisitingprofessor,
  parttimemalevisitingprofessor     :req.body.parttimemalevisitingprofessor,
  parttimefemalevisitingprofessor   :req.body.parttimefemalevisitingprofessor,
  totalmalevisitingprofessor        :req.body.totalmalevisitingprofessor,
  totalfemalevisitingprofessor      :req.body.totalfemalevisitingprofessor,
  totalhonoraryprofessorapproveseat :req.body.totalhonoraryprofessorapproveseat,
  approvemalehonoraryprofessor      :req.body.approvemalehonoraryprofessor,
  approvefemalehonoraryprofessor    :req.body.approvefemalehonoraryprofessor,
  parttimemalehonoraryprofessor     :req.body.parttimemalehonoraryprofessor,
  parttimefemalehonoraryprofessor   :req.body.parttimefemalehonoraryprofessor,
  totalmalehonoraryprofessor        :req.body.totalmalehonoraryprofessor,
  totalfemalehonoraryprofessor      :req.body.totalfemalehonoraryprofessor,
  totalsupernumararyprofessorapproveseat:req.body.totalsupernumararyprofessorapproveseat,
  approvemalesupernumararyprofessor :req.body.approvemalesupernumararyprofessor,
  approvefemalesupernumararyprofessor:req.body.approvefemalesupernumararyprofessor,
  parttimemalesupernumararyprofessor:req.body.parttimemalesupernumararyprofessor,
  parttimefemalesupernumararyprofessor:req.body.parttimefemalesupernumararyprofessor,
  totalmalesupernumararyprofessor    :req.body.totalmalesupernumararyprofessor,
  totalfemalesupernumararyprofessor  :req.body.totalfemalesupernumararyprofessor,
  totalemeritusprofessorapproveseat  :req.body.totalemeritusprofessorapproveseat,
  approvemaleemeritusprofessor       :req.body.approvemaleemeritusprofessor,
  approvefemaleemeritusprofessor     :req.body.approvefemaleemeritusprofessor,
  parttimemaleemeritusprofessor      :req.body.parttimemaleemeritusprofessor,
  parttimefemaleemeritusprofessor    :req.body.parttimefemaleemeritusprofessor,
  totalmaleemeritusprofessor         :req.body.totalmaleemeritusprofessor,
  totalfemaleemeritusprofessor       :req.body.totalfemaleemeritusprofessor,
  totalnationalprofessorapproveseat  :req.body.totalnationalprofessorapproveseat,
  approvemalenationalprofessor       :req.body.approvemalenationalprofessor,
  approvefemalenationalprofessor     :req.body.approvefemalenationalprofessor,
  parttimemalenationalprofessor      :req.body.parttimemalenationalprofessor,
  parttimefemalenationalprofessor    :req.body.parttimefemalenationalprofessor,
  totalmalenationalprofessor         :req.body.totalmalenationalprofessor,
  totalfemalenationalprofessor       :req.body.totalfemalenationalprofessor,
  workingmaleteacher                 :req.body.workingmaleteacher,
  workingfemaleteacher               :req.body.workingfemaleteacher,
  absentmaleteacher                 :req.body.absentmaleteacher,
  absentfemaleteacher               :req.body.absentfemaleteacher,
  maleeducationvacationteacher       :req.body.maleeducationvacationteacher,
  femaleeducationvacationteacher     :req.body.femaleeducationvacationteacher,
  maletransmissionteacher            :req.body.maletransmissionteacher,
  femaletransmissionteacher          :req.body.femaletransmissionteacher,
  maleliyenteacher                   :req.body.maleliyenteacher,
  femaleliyenteacher                 :req.body.femaleliyenteacher,
  malefreesalaryteacher              :req.body.malefreesalaryteacher,
  femalefreesalaryteacher            :req.body.femalefreesalaryteacher,
  maleunapproveteacher               :req.body.maleunapproveteacher,
  femaleunapproveteacher             :req.body.femaleunapproveteacher,
  maleparttimeteacher                :req.body.maleparttimeteacher,
  femaleparttimeteacher              :req.body.femaleparttimeteacher,
  totalpermanentofficerapproveseat   :req.body.totalpermanentofficerapproveseat,
  permanentmaleofficer               :req.body.permanentmaleofficer,
  permanentfemaleofficer             :req.body.permanentfemaleofficer,
  totalcontactualofficerapproveseat  :req.body.totalcontactualofficerapproveseat,
  contactualmaleofficer              :req.body.contactualmaleofficer,
  contactualfemaleofficer            :req.body.contactualfemaleofficer,
  totalthirdclasspermanentemployeapproveseat:req.body.totalthirdclasspermanentemployeapproveseat,
  thirdclasspermanentmaleemploye     :req.body.thirdclasspermanentmaleemploye,
  thirdclasspermanentfemaleemploye   :req.body.thirdclasspermanentfemaleemploye,
  totalfourthclasspermanentemployeapproveseat:req.body.totalfourthclasspermanentemployeapproveseat,
  fourthclasspermanentmaleemploye    :req.body.fourthclasspermanentmaleemploye,
  fourthclasspermanentfemaleemploye  :req.body.fourthclasspermanentfemaleemploye,
  totaladhokemployeapproveseat       :req.body.totaladhokemployeapproveseat,
  adhokmaleeemploye                  :req.body.adhokmaleeemploye,
  adhokfemaleeemploye                :req.body.adhokfemaleeemploye,
  totaldailypresentemployeapproveseat:req.body.totaldailypresentemployeapproveseat,
  dailypresentmaleeemploye           :req.body.dailypresentmaleeemploye,
  dailypresentfemaleeemploye         :req.body.dailypresentfemaleeemploye
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/foundationsectionuser/'+req.params.id);
          }
        });
});

app.get('/foundationsectionuser/:id',function(req,res){
  res.render('foundationsectiondata',{foundationsectionuser:req.foundationsectionuserId});
});
app.get('/foundationsectionuser/:id/delete', function(req,res){
  foundationsectionuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/foundationsection');
  });
});





app.get('/halladmin',function(req,res){
    res.render('halladmin');
});

app.get('/halldata',function(req,res){
  if(req.query.hallsession){
    halluser.findOne({_id:req.query.hallsession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('halldata',{halluser:doc});
    }
  });
  }
});


app.post('/halladmin',function(req,res){
  session=req.session;
  if(req.body.username=='halladmin' && req.body.password=='halladmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/hall');
})

app.get('/halllogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/halladmin');
  })
})

app.get('/hall',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('hall');
  }
  else
  {
    res.end('who are you');
  }
});


var hallSchema=new mongoose.Schema({
  _id                 :Number,
  bongobondhuhallmalestudent:Number,
  bongobondhuhallfemalestudent:Number,
  ziahallmalestudent          :Number,
  ziahallfemalestudent        :Number,
  selimhallmalestudent        :Number,
  selimhallfemalestudent      :Number,
  shohidulhallmalestudent     :Number,
  shohidulhallfemalestudent   :Number,
  hamidhallmalestudent        :Number,
  hamidhallfemalestudent      :Number,
  tinshedhallmalestudent      :Number,
  tinshedhallfemalestudent    :Number,
  shekhhasinahallmalestudent  :Number,
  shekhhasinahallfemalestudent:Number
});

var halluser=mongoose.model('hall',hallSchema);

app.get('/hall',function(req,res){
  res.render('hall');
});

app.post('/hallnew',function(req,res){
  new halluser({
  _id                 :req.body.session,
  bongobondhuhallmalestudent  :req.body.bongobondhuhallmalestudent,
  bongobondhuhallfemalestudent:req.body.bongobondhuhallfemalestudent,
  ziahallmalestudent          :req.body.ziahallmalestudent,
  ziahallfemalestudent        :req.body.ziahallfemalestudent,
  selimhallmalestudent        :req.body.selimhallmalestudent,
  selimhallfemalestudent      :req.body.selimhallfemalestudent,
  shohidulhallmalestudent     :req.body.shohidulhallmalestudent,
  shohidulhallfemalestudent   :req.body.shohidulhallfemalestudent,
  hamidhallmalestudent        :req.body.hamidhallmalestudent,
  hamidhallfemalestudent      :req.body.hamidhallfemalestudent,
  tinshedhallmalestudent      :req.body.tinshedhallmalestudent,
  tinshedhallfemalestudent    :req.body.tinshedhallfemalestudent,
  shekhhasinahallmalestudent  :req.body.shekhhasinahallmalestudent,
  shekhhasinahallfemalestudent:req.body.shekhhasinahallfemalestudent
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('halldata',{halluser:doc});
  });
});


app.param('id',function(req,res,next,id){
  halluser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.halluserId=doc;
        next();
      }
  });
});

app.get('/halluser/:id/edit',function(req,res){
  res.render('halldataupdate',{halluser:req.halluserId});
});

// for updating data
app.post('/halluser/:id', function(req, res){
  halluser.updateOne({_id: req.params.id},
    { $set:{
  bongobondhuhallmalestudent  :req.body.bongobondhuhallmalestudent,
  bongobondhuhallfemalestudent:req.body.bongobondhuhallfemalestudent,
  ziahallmalestudent          :req.body.ziahallmalestudent,
  ziahallfemalestudent        :req.body.ziahallfemalestudent,
  selimhallmalestudent        :req.body.selimhallmalestudent,
  selimhallfemalestudent      :req.body.selimhallfemalestudent,
  shohidulhallmalestudent     :req.body.shohidulhallmalestudent,
  shohidulhallfemalestudent   :req.body.shohidulhallfemalestudent,
  hamidhallmalestudent        :req.body.hamidhallmalestudent,
  hamidhallfemalestudent      :req.body.hamidhallfemalestudent,
  tinshedhallmalestudent      :req.body.tinshedhallmalestudent,
  tinshedhallfemalestudent    :req.body.tinshedhallfemalestudent,
  shekhhasinahallmalestudent  :req.body.shekhhasinahallmalestudent,
  shekhhasinahallfemalestudent:req.body.shekhhasinahallfemalestudent
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/halluser/'+req.params.id);
          }
        });
});

app.get('/halluser/:id',function(req,res){
  res.render('halldata',{halluser:req.halluserId});
});
app.get('/halluser/:id/delete', function(req,res){
  halluser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/hall');
  });
});




app.get('/libraryadmin',function(req,res){
    res.render('libraryadmin');
});

app.get('/librarydata',function(req,res){
  if(req.query.librarysession){
    libraryuser.findOne({_id:req.query.librarysession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('librarydata',{libraryuser:doc});
    }
  });
  }
});

app.post('/libraryadmin',function(req,res){
  session=req.session;
  if(req.body.username=='libraryadmin' && req.body.password=='libraryadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/library');
})

app.get('/librarylogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/libraryadmin');
  })
})

app.get('/library',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('library');
  }
  else
  {
    res.end('who are you');
  }
});

var librarySchema=new mongoose.Schema({
  _id               :Number,
  totallibrarybook  :Number,
  totaljournal      :Number,
  totalaudiovisual  :Number,
  totalcollectedlibrarybook:Number,
  totalcollectedjournal    :Number,
  totalcollectedaudiovisual:Number,
  totalsubscribedlibrarybook:Number,
  totalsubscribedjournal    :Number,
  totalsubscribedaudiovisual:Number,
  totalotherlibrarybook     :Number,
  totalotherjournal         :Number,
  totalotheraudiovisual     :Number,
  librarygraduatedmale      :Number,
  librarygraduatedfemale    :Number,
  libraryothermale          :Number,
  libraryotherfemale        :Number 
});

var libraryuser=mongoose.model('library',librarySchema);

app.post('/librarynew',function(req,res){
  new libraryuser({
  _id               :req.body.session,
  totallibrarybook  :req.body.totallibrarybook,
  totaljournal      :req.body.totaljournal,
  totalaudiovisual  :req.body.totalaudiovisual,
  totalcollectedlibrarybook:req.body.totalcollectedlibrarybook,
  totalcollectedjournal    :req.body.totalcollectedjournal,
  totalcollectedaudiovisual:req.body.totalcollectedaudiovisual,
  totalsubscribedlibrarybook:req.body.totalsubscribedlibrarybook,
  totalsubscribedjournal    :req.body.totalsubscribedjournal,
  totalsubscribedaudiovisual:req.body.totalsubscribedaudiovisual,
  totalotherlibrarybook     :req.body.totalotherlibrarybook,
  totalotherjournal         :req.body.totalotherjournal,
  totalotheraudiovisual     :req.body.totalotheraudiovisual,
  librarygraduatedmale      :req.body.librarygraduatedmale,
  librarygraduatedfemale    :req.body.librarygraduatedfemale,
  libraryothermale          :req.body.libraryothermale,
  libraryotherfemale        :req.body.libraryotherfemale
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('librarydata',{libraryuser:doc});
  });
});


app.param('id',function(req,res,next,id){
  libraryuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.libraryuserId=doc;
        next();
      }
  });
});

app.get('/libraryuser/:id/edit',function(req,res){
  res.render('librarydataupdate',{libraryuser:req.libraryuserId});
});

// for updating data
app.post('/libraryuser/:id', function(req, res){
  libraryuser.updateOne({_id: req.params.id},
    { $set:{
  totallibrarybook  :req.body.totallibrarybook,
  totaljournal      :req.body.totaljournal,
  totalaudiovisual  :req.body.totalaudiovisual,
  totalcollectedlibrarybook:req.body.totalcollectedlibrarybook,
  totalcollectedjournal    :req.body.totalcollectedjournal,
  totalcollectedaudiovisual:req.body.totalcollectedaudiovisual,
  totalsubscribedlibrarybook:req.body.totalsubscribedlibrarybook,
  totalsubscribedjournal    :req.body.totalsubscribedjournal,
  totalsubscribedaudiovisual:req.body.totalsubscribedaudiovisual,
  totalotherlibrarybook     :req.body.totalotherlibrarybook,
  totalotherjournal         :req.body.totalotherjournal,
  totalotheraudiovisual     :req.body.totalotheraudiovisual,
  librarygraduatedmale      :req.body.librarygraduatedmale,
  librarygraduatedfemale    :req.body.librarygraduatedfemale,
  libraryothermale          :req.body.libraryothermale,
  libraryotherfemale        :req.body.libraryotherfemale
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/libraryuser/'+req.params.id);
          }
        });
});

app.get('/libraryuser/:id',function(req,res){
  res.render('librarydata',{libraryuser:req.libraryuserId});
});
app.get('/libraryuser/:id/delete', function(req,res){
  libraryuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/library');
  });
});




app.get('/commiteadmin',function(req,res){
    res.render('commiteadmin');
});

app.get('/commitedata',function(req,res){
  if(req.query.commitesession){
    commiteuser.findOne({_id:req.query.commitesession},function(err,doc){
    if(err) throw err;
    if(!doc){
      res.send('404 not found');
    }else{
     res.render('commitedata',{commiteuser:doc});
    }
  });
  }
});

app.post('/commiteadmin',function(req,res){
  session=req.session;
  if(req.body.username=='commiteadmin' && req.body.password=='commiteadmin')
  {
   session.uniqueID=req.body.username;
  }
   res.redirect('/commite');
})

app.get('/commitelogout',function(req,res){
  req.session.destroy(function(err){
    if(err) throw err;
    res.redirect('/commiteadmin');
  })
})

app.get('/commite',function(req,res){
  session=req.session;

  if(session.uniqueID){
     res.render('commite');
  }
  else
  {
    res.end('who are you');
  }
});

var commiteSchema=new mongoose.Schema({
  _id                 :Number,
  artsmalestudent     :Number,
  artsfemalestudent   :Number,
  socialsciencemalestudent:Number,
  socialsciencefemalestudent:Number,
  educationmalestudent :Number,
  educationfemalestudent:Number,
  commercemalestudent   :Number,
  commercefemalestudent :Number,
  lawmalestudent        :Number,
  lawfemalestudent      :Number,
  farmecymalestudent    :Number,
  farmecyfemalestudent  :Number,
  sciencemalestudent    :Number,
  sciencefemalestudent  :Number,
  advicemalestudent     :Number,
  advicefemalestudent   :Number,
  agriculturemalestudent:Number,
  agriculturefemalestudent:Number,
  engineeringmalestudent :Number,
  engineeringfemalestudent:Number,
  othermalestudent       :Number,
  otherfemalestudent     :Number,
  totaleeeteacher        :Number,
  eeemalestudent         :Number,
  eeefemalestudent        :Number,
  totaleeestudent        :Number,
  eeeteacheronupatstudent:String,
  totalcseteacher        :Number,
  csemalestudent        :Number,
  csefemalestudent        :Number,
  totalcsestudent        :Number,
  totaleteteacher        :Number,
  etemalestudent        :Number,
  etefemalestudent        :Number,
  totaletestudent        :Number,
  totaleceteacher        :Number,
  ecemalestudent        :Number,
  ecefemalestudent        :Number,
  totalecestudent        :Number,
  totalmeteacher         :Number,
  memalestudent         :Number,
  mefemalestudent         :Number,
  totalmestudent         :Number,
  meteacheronupatstudent :String,
  totalipeteacher        :Number,
  ipemalestudent        :Number,
  ipefemalestudent        :Number,
  totalipestudent        :Number,
  totalgceteacher        :Number,
  gcemalestudent        :Number,
  gcefemalestudent        :Number,
  totalgcestudent        :Number,
  totalmteteacher        :Number,
  mtemalestudent        :Number,
  mtefemalestudent        :Number,
  totalmtestudent        :Number,
  totalmseteacher        :Number,
  msemalestudent        :Number,
  msefemalestudent        :Number,
  totalmsestudent        :Number,
  totalcfpeteacher       :Number,
  cfpemalestudent       :Number,
  cfpefemalestudent       :Number,
  totalcfpestudent       :Number,
  totalceteacher         :Number,
  cemalestudent         :Number,
  cefemalestudent         :Number,
  totalcestudent         :Number,
  ceteacheronupatstudent :String,
  totalarchiteacher      :Number,
  archimalestudent      :Number,
  archifemalestudent      :Number,
  totalarchistudent      :Number,
  totalurpteacher        :Number,
  urpmalestudent        :Number,
  urpfemalestudent        :Number,
  totalurpstudent        :Number,
  totalbecmteacher       :Number,
  becmmalestudent       :Number,
  becmfemalestudent       :Number,
  totalbecmstudent       :Number,
  totalmathteacher       :Number,
  mathmalestudent       :Number,
  mathfemalestudent       :Number,
  totalmathstudent       :Number,
  mathteacheronupatstudent:String,
  totalphysicsteacher    :Number,
  physicsmalestudent    :Number,
  physicsfemalestudent    :Number,
  totalphysicsstudent    :Number,
  totalchemistryteacher  :Number,
  chemistrymalestudent  :Number,
  chemistryfemalestudent  :Number,
  totalchemistrystudent  :Number,
  totalhumteacher        :Number,
  hummalestudent        :Number,
  humfemalestudent        :Number,
  totalhumstudent        :Number,
  teacheronupatstudent   :String,
  officeronupatstudent   :String,
  employeonupatstudent   :String,
  totalland              :String,
  totalteacher           :String,
  totalhall              :String,
  totalfemaleteacher     :String,
  totalfaculty           :String,
  parttimeteacher        :String,
  totaldepartment        :String,
  totalphdteacher        :String,
  totalinstitute         :String,
  totalprofessor         :String,
  totalcollage           :String,
  tatalassociateproffesor:String,
  asistantproffesor      :String,
  totalseat              :String,
  totallecturar          :String,
  totaladmissionstudent  :String,
  approveabsentteacher   :String,
  totalfemalestudent     :String,
  unapprovedteacher      :String,
  totalstudents          :String,
  employeenum            :String,
  totalemployeenum       :String,
  totalbscstudents       :String,
  teacherstudentsratio   :String,
  totalbscsnexttudents   :String,
  employeestudentsratio  :String,
  totalbscsnexttotudents :String,
  totalemployeestudentsratio:String,
  mphilphdtotudents      :String,
  residencemale          :String,
  hum                    :String,
  residencefemale        :String,
  socialscience          :String,
  residenceteacher       :String,
  education              :String,
  residenceemployee      :String,
  management             :String,
  residenceemployeer     :String,
  law                    :String,
  phermacy               :String,
  vatdevelopement        :String,
  science                :String,
  selfincome             :String,
  medical                :String,
  others                 :String,
  agri                   :String,
  edu                    :String,
  engineering            :String,
  research               :String,
  others1                :String,
  researchstipend        :String,
  salary                 :String,
  masters                :String,
  transportsec           :String,
  masterspass            :String,
  electricsection        :String,
  masterstechnical       :String,
  infrasturctures        :String,
  masterspasssss         :String,
  medicalsection         :String,
  masterspassssstechnical:String,
  otherssection          :String,
  mastersmphilothers     :String,
  certificate            :String,
  libarysec              :String,
  collectionnumber       :String,
  suspendclassday        :String,
  researchcollectionnumber:String
});

var commiteuser=mongoose.model('commite',commiteSchema);

app.post('/commitenew',function(req,res){
  new commiteuser({
  _id                 :req.body.session,
  artsmalestudent     :req.body.artsmalestudent,
  artsfemalestudent   :req.body.artsfemalestudent,
  socialsciencemalestudent:req.body.socialsciencemalestudent,
  socialsciencefemalestudent:req.body.socialsciencefemalestudent,
  educationmalestudent  :req.body.educationmalestudent,
  educationfemalestudent:req.body.educationfemalestudent,
  commercemalestudent   :req.body.commercemalestudent,
  commercefemalestudent :req.body.commercefemalestudent,
  lawmalestudent        :req.body.lawmalestudent,
  lawfemalestudent      :req.body.lawfemalestudent,
  farmecymalestudent    :req.body.farmecymalestudent,
  farmecyfemalestudent  :req.body.farmecyfemalestudent,
  sciencemalestudent    :req.body.sciencemalestudent,
  sciencefemalestudent  :req.body.sciencefemalestudent,
  advicemalestudent     :req.body.advicemalestudent,
  advicefemalestudent   :req.body.advicefemalestudent,
  agriculturemalestudent:req.body.agriculturemalestudent,
  agriculturefemalestudent:req.body.agriculturefemalestudent,
  engineeringmalestudent :req.body.engineeringmalestudent,
  engineeringfemalestudent:req.body.engineeringfemalestudent,
  othermalestudent       :req.body.othermalestudent,
  otherfemalestudent     :req.body.otherfemalestudent,
  totaleeeteacher        :req.body.totaleeeteacher,
  eeemalestudent         :req.body.eeemalestudent,
  eeefemalestudent       :req.body.eeefemalestudent,
  totaleeestudent        :req.body.totaleeestudent,
  eeeteacheronupatstudent:req.body.eeeteacheronupatstudent,
  totalcseteacher        :req.body.totalcseteacher,
  csemalestudent         :req.body.csemalestudent,
  csefemalestudent       :req.body.csefemalestudent,
  totalcsestudent        :req.body.totalcsestudent,
  totaleteteacher        :req.body.totaleteteacher,
  etemalestudent         :req.body.etemalestudent,
  etefemalestudent       :req.body.etefemalestudent,
  totaletestudent        :req.body.totaletestudent,
  totaleceteacher        :req.body.totaleceteacher,
  ecemalestudent         :req.body.ecemalestudent,
  ecefemalestudent       :req.body.ecefemalestudent,
  totalecestudent        :req.body.totalecestudent,
  totalmeteacher         :req.body.totalmeteacher,
  memalestudent          :req.body.memalestudent,
  mefemalestudent        :req.body.mefemalestudent,
  totalmestudent         :req.body.totalmestudent,
  meteacheronupatstudent :req.body.meteacheronupatstudent,
  totalipeteacher        :req.body.totalipeteacher,
  ipemalestudent         :req.body.ipemalestudent,
  ipefemalestudent       :req.body.ipefemalestudent,
  totalipestudent        :req.body.totalipestudent,
  totalgceteacher        :req.body.totalgceteacher,
  gcemalestudent         :req.body.gcemalestudent,
  gcefemalestudent       :req.body.gcefemalestudent,
  totalgcestudent        :req.body.totalgcestudent,
  totalmteteacher        :req.body.totalmteteacher,
  mtemalestudent         :req.body.mtemalestudent,
  mtefemalestudent       :req.body.mtefemalestudent,
  totalmtestudent        :req.body.totalmtestudent,
  totalmseteacher        :req.body.totalmseteacher,
  msemalestudent         :req.body.msemalestudent,
  msefemalestudent       :req.body.msefemalestudent,
  totalmsestudent        :req.body.totalmsestudent,
  totalcfpeteacher       :req.body.totalcfpeteacher,
  cfpemalestudent        :req.body.cfpemalestudent,
  cfpefemalestudent      :req.body.cfpefemalestudent,
  totalcfpestudent       :req.body.totalcfpestudent,
  totalceteacher         :req.body.totalceteacher,
  cemalestudent          :req.body.cemalestudent,
  cefemalestudent        :req.body.cefemalestudent,
  totalcestudent         :req.body.totalcestudent,
  ceteacheronupatstudent :req.body.ceteacheronupatstudent,
  totalarchiteacher      :req.body.totalarchiteacher,
  archimalestudent       :req.body.archimalestudent,
  archifemalestudent     :req.body.archifemalestudent,
  totalarchistudent      :req.body.totalarchistudent,
  totalurpteacher        :req.body.totalurpteacher,
  urpmalestudent         :req.body.urpmalestudent,
  urpfemalestudent       :req.body.urpfemalestudent,
  totalurpstudent        :req.body.totalurpstudent,
  totalbecmteacher       :req.body.totalbecmteacher,
  becmmalestudent        :req.body.becmmalestudent,
  becmfemalestudent      :req.body.becmfemalestudent,
  totalbecmstudent       :req.body.totalbecmstudent,
  totalmathteacher       :req.body.totalmathteacher,
  mathmalestudent        :req.body.mathmalestudent,
  mathfemalestudent      :req.body.mathfemalestudent,
  totalmathstudent       :req.body.totalmathstudent,
  mathteacheronupatstudent:req.body.mathteacheronupatstudent,
  totalphysicsteacher    :req.body.totalphysicsteacher,
  physicsmalestudent     :req.body.physicsmalestudent,
  physicsfemalestudent   :req.body.physicsfemalestudent,
  totalphysicsstudent    :req.body.totalphysicsstudent,
  totalchemistryteacher  :req.body.totalchemistryteacher,
  chemistrymalestudent   :req.body.chemistrymalestudent,
  chemistryfemalestudent :req.body.chemistryfemalestudent,
  totalchemistrystudent  :req.body.totalchemistrystudent,
  totalhumteacher        :req.body.totalhumteacher,
  hummalestudent         :req.body.hummalestudent,
  humfemalestudent       :req.body.humfemalestudent,
  totalhumstudent        :req.body.totalhumstudent,
  teacheronupatstudent   :req.body.teacheronupatstudent,
  officeronupatstudent   :req.body.officeronupatstudent,
  employeonupatstudent   :req.body.employeonupatstudent,
  totalland              :req.body.totalland,
  totalteacher           :req.body.totalteacher,
  totalhall              :req.body.totalhall,
  totalfemaleteacher     :req.body.totalfemaleteacher,
  totalfaculty           :req.body.totalfaculty,
  parttimeteacher        :req.body.parttimeteacher,
  totaldepartment        :req.body.totaldepartment,
  totalphdteacher        :req.body.totalphdteacher,
  totalinstitute         :req.body.totalinstitute,
  totalprofessor         :req.body.totalprofessor,
  totalcollage           :req.body.totalcollage,
  tatalassociateproffesor:req.body.tatalassociateproffesor,
  asistantproffesor      :req.body.asistantproffesor,
  totalseat              :req.body.totalseat,
  totallecturar          :req.body.totallecturar,
  totaladmissionstudent  :req.body.totaladmissionstudent,
  approveabsentteacher   :req.body.approveabsentteacher,
  totalfemalestudent     :req.body.totalfemalestudent,
  unapprovedteacher      :req.body.unapprovedteacher,
  totalstudents          :req.body.totalstudents,
  employeenum            :req.body.employeenum,
  totalemployeenum       :req.body.totalemployeenum,
  totalbscstudents       :req.body.totalbscstudents,
  teacherstudentsratio   :req.body.teacherstudentsratio,
  totalbscsnexttudents   :req.body.totalbscsnexttudents,
  employeestudentsratio  :req.body.employeestudentsratio,
  totalbscsnexttotudents :req.body.totalbscsnexttotudents,
  totalemployeestudentsratio:req.body.totalemployeestudentsratio,
  mphilphdtotudents      :req.body.mphilphdtotudents,
  residencemale          :req.body.residencemale,
  hum                    :req.body.hum,
  residencefemale        :req.body.residencefemale,
  socialscience          :req.body.socialscience,
  residenceteacher       :req.body.residenceteacher,
  education              :req.body.education,
  residenceemployee      :req.body.residenceemployee,
  management             :req.body.management,
  residenceemployeer     :req.body.residenceemployeer,
  law                    :req.body.law,
  phermacy               :req.body.phermacy,
  vatdevelopement        :req.body.vatdevelopement,
  science                :req.body.science,
  selfincome             :req.body.selfincome,
  medical                :req.body.medical,
  others                 :req.body.others,
  agri                   :req.body.agri,
  edu                    :req.body.edu,
  engineering            :req.body.engineering,
  research               :req.body.research,
  others1                :req.body.others1,
  researchstipend        :req.body.researchstipend,
  salary                 :req.body.salary,
  masters                :req.body.masters,
  transportsec           :req.body.transportsec,
  masterspass            :req.body.masterspass,
  electricsection        :req.body.electricsection,
  masterstechnical       :req.body.masterstechnical,
  infrasturctures        :req.body.infrasturctures,
  masterspasssss         :req.body.masterspasssss,
  medicalsection         :req.body.medicalsection,
  masterspassssstechnical:req.body.masterspassssstechnical,
  otherssection          :req.body.otherssection,
  mastersmphilothers     :req.body.mastersmphilothers,
  certificate            :req.body.certificate,
  libarysec              :req.body.libarysec,
  collectionnumber       :req.body.collectionnumber,
  suspendclassday        :req.body.suspendclassday,
  researchcollectionnumber:req.body.researchcollectionnumber
  }).save(function(err,doc){
    if(err) res.json(err);
    else
      console.log('data inserted successfully');
    res.render('commitedata',{commiteuser:doc});
  });
});

app.param('id',function(req,res,next,id){
  commiteuser.findById(id,function(err,doc){
    if(err) res.json(err);
      else
      {
        req.commiteuserId=doc;
        next();
      }
  });
});

app.get('/commiteuser/:id/edit',function(req,res){
  res.render('commitedataupdate',{commiteuser:req.commiteuserId});
});

// for updating data
app.post('/commiteuser/:id', function(req, res){
  commiteuser.updateOne({_id: req.params.id},
    { $set:{
  artsmalestudent     :req.body.artsmalestudent,
  artsfemalestudent   :req.body.artsfemalestudent,
  socialsciencemalestudent:req.body.socialsciencemalestudent,
  socialsciencefemalestudent:req.body.socialsciencefemalestudent,
  educationmalestudent  :req.body.educationmalestudent,
  educationfemalestudent:req.body.educationfemalestudent,
  commercemalestudent   :req.body.commercemalestudent,
  commercefemalestudent :req.body.commercefemalestudent,
  lawmalestudent        :req.body.lawmalestudent,
  lawfemalestudent      :req.body.lawfemalestudent,
  farmecymalestudent    :req.body.farmecymalestudent,
  farmecyfemalestudent  :req.body.farmecyfemalestudent,
  sciencemalestudent    :req.body.sciencemalestudent,
  sciencefemalestudent  :req.body.sciencefemalestudent,
  advicemalestudent     :req.body.advicemalestudent,
  advicefemalestudent   :req.body.advicefemalestudent,
  agriculturemalestudent:req.body.agriculturemalestudent,
  agriculturefemalestudent:req.body.agriculturefemalestudent,
  engineeringmalestudent :req.body.engineeringmalestudent,
  engineeringfemalestudent:req.body.engineeringfemalestudent,
  othermalestudent       :req.body.othermalestudent,
  otherfemalestudent     :req.body.otherfemalestudent,
  totaleeeteacher        :req.body.totaleeeteacher,
  eeemalestudent        :req.body.eeemalestudent,
  eeefemalestudent        :req.body.eeefemalestudent,
  totaleeestudent        :req.body.totaleeestudent,
  eeeteacheronupatstudent:req.body.eeeteacheronupatstudent,
  totalcseteacher        :req.body.totalcseteacher,
  csemalestudent        :req.body.csemalestudent,
  csefemalestudent        :req.body.csefemalestudent,
  totalcsestudent        :req.body.totalcsestudent,
  totaleteteacher        :req.body.totaleteteacher,
  etemalestudent        :req.body.etemalestudent,
  etefemalestudent        :req.body.etefemalestudent,
  totaletestudent        :req.body.totaletestudent,
  totaleceteacher        :req.body.totaleceteacher,
  ecemalestudent        :req.body.ecemalestudent,
  ecefemalestudent        :req.body.ecefemalestudent,
  totalecestudent        :req.body.totalecestudent,
  totalmeteacher         :req.body.totalmeteacher,
  memalestudent         :req.body.memalestudent,
  mefemalestudent         :req.body.mefemalestudent,
  totalmestudent         :req.body.totalmestudent,
  meteacheronupatstudent :req.body.meteacheronupatstudent,
  totalipeteacher        :req.body.totalipeteacher,
  ipemalestudent        :req.body.ipemalestudent,
  ipefemalestudent        :req.body.ipefemalestudent,
  totalipestudent        :req.body.totalipestudent,
  totalgceteacher        :req.body.totalgceteacher,
  gcemalestudent        :req.body.gcemalestudent,
  gcefemalestudent        :req.body.gcefemalestudent,
  totalgcestudent        :req.body.totalgcestudent,
  totalmteteacher        :req.body.totalmteteacher,
  mtemalestudent        :req.body.mtemalestudent,
  mtefemalestudent        :req.body.mtefemalestudent,
  totalmtestudent        :req.body.totalmtestudent,
  totalmseteacher        :req.body.totalmseteacher,
  msemalestudent        :req.body.msemalestudent,
  msefemalestudent        :req.body.msefemalestudent,
  totalmsestudent        :req.body.totalmsestudent,
  totalcfpeteacher       :req.body.totalcfpeteacher,
  cfpemalestudent       :req.body.cfpemalestudent,
  cfpefemalestudent       :req.body.cfpefemalestudent,
  totalcfpestudent       :req.body.totalcfpestudent,
  totalceteacher         :req.body.totalceteacher,
  cemalestudent         :req.body.cemalestudent,
  cefemalestudent         :req.body.cefemalestudent,
  totalcestudent         :req.body.totalcestudent,
  ceteacheronupatstudent :req.body.ceteacheronupatstudent,
  totalarchiteacher      :req.body.totalarchiteacher,
  archimalestudent      :req.body.archimalestudent,
  archifemalestudent      :req.body.archifemalestudent,
  totalarchistudent      :req.body.totalarchistudent,
  totalurpteacher        :req.body.totalurpteacher,
  urpmalestudent        :req.body.urpmalestudent,
  urpfemalestudent        :req.body.urpfemalestudent,
  totalurpstudent        :req.body.totalurpstudent,
  totalbecmteacher       :req.body.totalbecmteacher,
  becmmalestudent       :req.body.becmmalestudent,
  becmfemalestudent       :req.body.becmfemalestudent,
  totalbecmstudent       :req.body.totalbecmstudent,
  totalmathteacher       :req.body.totalmathteacher,
  mathmalestudent       :req.body.mathmalestudent,
  mathfemalestudent       :req.body.mathfemalestudent,
  totalmathstudent       :req.body.totalmathstudent,
  mathteacheronupatstudent:req.body.mathteacheronupatstudent,
  totalphysicsteacher    :req.body.totalphysicsteacher,
  physicsmalestudent    :req.body.physicsmalestudent,
  physicsfemalestudent    :req.body.physicsfemalestudent,
  totalphysicsstudent    :req.body.totalphysicsstudent,
  totalchemistryteacher  :req.body.totalchemistryteacher,
  chemistrymalestudent  :req.body.chemistrymalestudent,
  chemistryfemalestudent  :req.body.chemistryfemalestudent,
  totalchemistrystudent  :req.body.totalchemistrystudent,
  totalhumteacher        :req.body.totalhumteacher,
  hummalestudent        :req.body.hummalestudent,
  humfemalestudent        :req.body.humfemalestudent,
  totalhumstudent        :req.body.totalhumstudent,
  teacheronupatstudent   :req.body.teacheronupatstudent,
  officeronupatstudent   :req.body.officeronupatstudent,
  employeonupatstudent   :req.body.employeonupatstudent,
  totalland              :req.body.totalland,
  totalteacher           :req.body.totalteacher,
  totalhall              :req.body.totalhall,
  totalfemaleteacher     :req.body.totalfemaleteacher,
  totalfaculty           :req.body.totalfaculty,
  parttimeteacher        :req.body.parttimeteacher,
  totaldepartment        :req.body.totaldepartment,
  totalphdteacher        :req.body.totalphdteacher,
  totalinstitute         :req.body.totalinstitute,
  totalprofessor         :req.body.totalprofessor,
  totalcollage           :req.body.totalcollage,
  tatalassociateproffesor:req.body.tatalassociateproffesor,
  asistantproffesor      :req.body.asistantproffesor,
  totalseat              :req.body.totalseat,
  totallecturar          :req.body.totallecturar,
  totaladmissionstudent  :req.body.totaladmissionstudent,
  approveabsentteacher   :req.body.approveabsentteacher,
  totalfemalestudent     :req.body.totalfemalestudent,
  unapprovedteacher      :req.body.unapprovedteacher,
  totalstudents          :req.body.totalstudents,
  employeenum            :req.body.employeenum,
  totalemployeenum       :req.body.totalemployeenum,
  totalbscstudents       :req.body.totalbscstudents,
  teacherstudentsratio   :req.body.teacherstudentsratio,
  totalbscsnexttudents   :req.body.totalbscsnexttudents,
  employeestudentsratio  :req.body.employeestudentsratio,
  totalbscsnexttotudents :req.body.totalbscsnexttotudents,
  totalemployeestudentsratio:req.body.totalemployeestudentsratio,
  mphilphdtotudents      :req.body.mphilphdtotudents,
  residencemale          :req.body.residencemale,
  hum                    :req.body.hum,
  residencefemale        :req.body.residencefemale,
  socialscience          :req.body.socialscience,
  residenceteacher       :req.body.residenceteacher,
  education              :req.body.education,
  residenceemployee      :req.body.residenceemployee,
  management             :req.body.management,
  residenceemployeer     :req.body.residenceemployeer,
  law                    :req.body.law,
  phermacy               :req.body.phermacy,
  vatdevelopement        :req.body.vatdevelopement,
  science                :req.body.science,
  selfincome             :req.body.selfincome,
  medical                :req.body.medical,
  others                 :req.body.others,
  agri                   :req.body.agri,
  edu                    :req.body.edu,
  engineering            :req.body.engineering,
  research               :req.body.research,
  others1                :req.body.others1,
  researchstipend        :req.body.researchstipend,
  salary                 :req.body.salary,
  masters                :req.body.masters,
  transportsec           :req.body.transportsec,
  masterspass            :req.body.masterspass,
  electricsection        :req.body.electricsection,
  masterstechnical       :req.body.masterstechnical,
  infrasturctures        :req.body.infrasturctures,
  masterspasssss         :req.body.masterspasssss,
  medicalsection         :req.body.medicalsection,
  masterspassssstechnical:req.body.masterspassssstechnical,
  otherssection          :req.body.otherssection,
  mastersmphilothers     :req.body.mastersmphilothers,
  certificate            :req.body.certificate,
  libarysec              :req.body.libarysec,
  collectionnumber       :req.body.collectionnumber,
  suspendclassday        :req.body.suspendclassday,
  researchcollectionnumber:req.body.researchcollectionnumber
    }}, function(err, docs){
         if(err) res.json(err);
         else
          {
            res.redirect('/commiteuser/'+req.params.id);
          }
        });
});

app.get('/commiteuser/:id',function(req,res){
  res.render('commitedata',{commiteuser:req.commiteuserId});
});

app.get('/commiteuser/:id/delete', function(req,res){
  commiteuser.remove({_id:req.params.id},function(err){
    if(err) res.json(err)
    else
    res.redirect('/commite');
  });
});


app.listen(port);
console.log('server is running on port '+port);
