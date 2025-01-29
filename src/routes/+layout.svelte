<script>
    // global css that the layout will pass on to its children
    import './global.css';
    let { children } = $props();
</script>

<style>
    /*local css*/
    h1 {
        color: magenta;
    }
</style>

<div class="container">
    <div class="side-navbar-menu">
        <div class="img-frame">
            <div>☰</div>
        </div>

        <div class="side-navbar-option-box">
            <a class="side-navbar-option" href="./">Home</a>
            <a class="side-navbar-option" href="./About">About</a>
            <a class="side-navbar-option" href="./Projects">Projects</a>
            <a class="side-navbar-option" href="./TechStack">Tech Stack</a>
            <a class="side-navbar-option" href="./Contact">Contact</a>
        </div>
    </div>

    <div class="main-window-box">
        <div class="main-window-top-bar">
            <div>Current Page</div>
            <div>hallo</div>
        </div>

        <div class="main-window-view">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis, lacus ac sollicitudin pellentesque, sem purus scelerisque est, in pellentesque velit odio ut turpis. Nunc elit orci, iaculis sed libero id, suscipit lobortis est. Nullam auctor, elit quis pretium sodales, nisi ligula laoreet libero, vitae semper metus massa non neque. Donec vitae dolor sit amet ante eleifend consectetur. Donec quis tellus lacus. Morbi nisi risus, ultrices at egestas sed, eleifend ultricies est.</p>
            <p>Morbi dictum sapien sed est interdum aliquam. Mauris nec leo ac lacus interdum aliquet. Fusce in ultrices est, vitae scelerisque tellus. Etiam elementum velit at felis pharetra imperdiet. Etiam auctor quis ante vel commodo. Proin molestie augue orci, at venenatis odio tincidunt sagittis. Donec bibendum ligula quis placerat fringilla. Nullam nec augue justo. Mauris ac varius felis. Morbi in laoreet tortor, nec dapibus turpis. Aenean convallis est eget erat ultricies tempus. Vestibulum a nisl sed odio ornare accumsan eu vitae ante.</p>
            <p>Ut aliquet enim non dolor volutpat tincidunt. In tincidunt metus sit amet mi fermentum efficitur sit amet quis sem. Donec a dui enim. Quisque varius, nisi a porta ullamcorper, sem ante facilisis augue, eu semper turpis velit et magna. In sollicitudin tincidunt sapien, vel mollis sapien accumsan non. Donec a pharetra purus, quis fringilla mi. Nullam vestibulum eu metus eget ullamcorper.</p>
        </div>
    </div>
</div>

<h1>~</h1>

{@render children()}

<div class="avatar-box">
    <img src="./assets/placeholder.jpg" alt="Profile" class="avatar"/>
</div>

<div class="part part-img"></div>