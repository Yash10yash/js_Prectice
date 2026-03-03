let user = "Admin";

switch(user){
    case "Admin":
        console.log("Welcome, Admin! You have full access.");
        break;
    case "Editor":
        console.log("Welcome, Editor! You can edit content.");
        break;
    case "Viewer":
        console.log("Welcome, Viewer! You can view content.");
        break;
    default:
        console.log("Welcome, Guest! Please log in.");
}