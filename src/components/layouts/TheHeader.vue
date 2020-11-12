<template>
  <header>
      <h1>{{ title }}</h1>&nbsp;
          <br><br>
        <div>
            <nav>
                <ul>
                    <li><router-link to="/the-resources">Resources</router-link></li>
                    <li><router-link to="/form">Form</router-link></li>
                </ul>
            </nav>            
        </div>
  </header>
</template>

<script>
export default {
    props: ['title'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
    header {
        width: 100%;
        height: 7rem;
        background-color: #640032;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header h1 {
        color: white;
        margin: 0;
    }

    nav ul li a {
        color: grey;
        padding: 5px;
    }

    nav ul li a.router-link-active {
        padding: 5px;
        color: #f1a80a;
        border-color: #f1a80a;
    }
</style>