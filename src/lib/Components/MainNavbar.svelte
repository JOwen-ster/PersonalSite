<style>
    /* Sidebar Styling */
    .side-navbar {
        display: flex;
        flex-direction: column;
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 0 15px rgb(0, 255, 255);
        background: rgba(255, 255, 255, 0.05);
    }

    /* Sidebar Menu */
    .side-navbar-menu {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .side-navbar-option {
        color: darkorange;
        padding: 15px;
        text-align: center;
        text-decoration: none;
        border-radius: 10px;
        transition: 0.3s ease-in-out;
        font-weight: bold;
        position: relative; /* Make sure the pseudo-element is positioned correctly */
        display: inline-block; /* To make the element wrap around the text */
    }

    .side-navbar-option::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 10px;
        width: 80%;
        height: 2px;
        background: linear-gradient(90deg, cyan, white);
        border-radius: 50px;
        transform-origin: bottom right;
        transition: transform 0.5s ease-in-out;
        transform: translateX(-50%) scaleX(0);
    }

    .side-navbar-option:hover {
        transform: translateX(15%);
    }

    /* Apply the animation on hover */
    .side-navbar-option:hover::after {
        transform-origin: bottom left;
        transform: translateX(-50%) scaleX(1);
    }
</style>


<div class="side-navbar">
    <div class="side-navbar-icon">☰</div> <!--add css-->

    <div class="side-navbar-menu">
        <a class="side-navbar-option" href="./">Home</a>
        <a class="side-navbar-option" href="./About">About</a>
        <a class="side-navbar-option" href="./Projects">Projects</a>
        <a class="side-navbar-option" href="./TechStack">Tech Stack</a>
        <a class="side-navbar-option" href="./Contact">Contact</a>
    </div>
</div>