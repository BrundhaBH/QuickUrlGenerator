import express from "express";
import dotenv from "dotenv";
import path, { join } from "path";
import connectToMongo from "./Database/db.js";
import authRoute from "./Routes/authRoute.js";
import contactRoute from "./Routes/contactRoute.js";
import profileRoute from "./Routes/profileRoute.js";
import urlRoute from "./Routes/urlRoute.js";
import qrRoute from "./Routes/qrRoute.js";
import analyticsRoute from "./Routes/analyticsRoute.js";
import cors from "cors";
dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in the environment variables");
}
const app = express();
connectToMongo();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
const __dirname = path.resolve();
app.set("views", path.join(__dirname, "Views"));
app.use("/auth",authRoute);
app.use(express.static(path.join(__dirname,"public")));
app.use("/",contactRoute);

app.use("/",profileRoute);
app.use("/",urlRoute);
app.use("/",qrRoute);
app.use("/",analyticsRoute);


app.get("/", (req, res) => {
  res.render("index");
});



app.get("/page/contact",(req ,res)=>{
  try{
    res.render("contact");
    }
    catch(err){
    console.log(err)
    }
});


app.get("/page/feature",(req ,res)=>{
  try{
    res.render("feature");
    }
    catch(err){
    console.log(err)
    }
});

app.get("/page/aboutus",(req ,res)=>{
  try{
    res.render("aboutus");
    }
    catch(err){
    console.log(err)
    }
});

app.get("/page/pricing",(req ,res)=>{
  try{
    res.render("pricing");
    }
    catch(err){
    console.log(err)
    }
});

app.get("/page/profile",(req ,res)=>{
  try{
    res.render("profile");
    }
    catch(err){
    console.log(err)
    }
});

app.get("/page/login",(req ,res)=>{
  try{
    res.render("login");
    }
    catch(err){
    console.log(err)
    }
});

app.get("/page/register",(req ,res)=>{
  try{
    res.render("register");
    }
    catch(err){
    console.log(err)
    }
});


app.get("/page/privacypolicy",(req ,res)=>{
  try{
    res.render("privacypolicy");
    }
    catch(err){
    console.log(err)
    }
});

app.get("/page/termsofservice",(req ,res)=>{
  try{
    res.render("termsofservice");
    }
    catch(err){
    console.log(err)
    }
});

app.get("/page/faq",(req ,res)=>{
  try{
    res.render("faq");
    }
    catch(err){
    console.log(err)
    }
});


app.listen(process.env.PORT, () => {
  console.log(`Server is running on port 127.0.0.1:${process.env.PORT}`);
});