<script>
    function openEmailClient() {
        const contactorName = document.getElementById("name").value;
        const contactorMessage = document.getElementById("message").value
        window.location.href = `mailto:j.owen.sterling@outlook.com?subject=Business Inquiry&body=Hello, this is ${contactorName}. ${contactorMessage}`;
        return true;
    }
</script>

<style>
    form {
        border: 3px solid darkorange;
        border-radius: 15px;
        padding: 20px;
        text-align: center;
    }

    label {
        font-weight: bold;
        color: darkorange;
        display: block;
        margin-top: 10px;
    }

    input, textarea {
        width: 90%;
        padding: 8px;
        margin-top: 5px;
        border: 2px solid darkorange;
        border-radius: 10px;
        background-color: #ffffff;
        outline: none;
        font-size: 14px;
    }

    textarea {
        resize: none;
        height: 60px;
    }

    button {
        background-color: darkorange;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 10px;
        cursor: pointer;
        margin-top: 10px;
        transition: 0.3s;
    }

    button:hover {
        background-color: rgba(255, 140, 0, 0.6);
        transform: scale(1.1);
    }
</style>

<form>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    <br>
    <button type="submit" onclick={openEmailClient()}>Submit</button>
</form>