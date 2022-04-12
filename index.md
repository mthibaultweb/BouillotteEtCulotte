---
layout: homepage
title: Bouillotte & Culotte
---
<!-- <div class="row d-flex justify-content-center">
    <div class="col-4 col-lg-2 mt-5">
        <img src="{{ "/assets/images/logo-bouillotteetculotte.png" | relative_url }}" alt="Bouillotte et Culotte" width="100%" />
    </div>
</div> -->
<div class="row d-flex justify-content-center">
    <div class="col-12 col-lg-4 my-4">
        <img src="{{ "/assets/images/douleurs_homepage.jpg" | relative_url }}" alt="" width="100%" />
    </div>
</div>

<div>
    <h1 class="heading-title text-center mb-4">T'en as marre de <br/><span>te tordre de douleur ?</span></h1>
    <p class="subheading-title text-center mb-5">Et si on parlait d'endométriose ?</p>
    <div class="d-flex justify-content-center mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
        </svg>
    </div>
    <div class="row">
        <div class="col-12 col-lg-6">
            <div class="card card-summary border-0">
                <img class="card-img" src="{{ "/assets/images/interrogation_homepage.jpg" | relative_url }}" alt="">
                <div class="card-body">
                    <a href="/que-m-arrive-t-il/" class="btn btn-primary btn-sm">Que m'arrive-t-il ?</a>
                    <p class="card-text">Tu te poses des questions sur tes règles ? Tu as des symptômes que tu trouves anormaux et tu veux savoir pourquoi ? Lorsque tu parles de tes règles à ton entourage, tu ne te retrouves pas dans leurs expériences ? On peut peut-être répondre à tes questions…</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-6">
            <div class="card card-summary border-0">
                <img class="card-img" src="{{ "/assets/images/discussion_homepage.png" | relative_url }}" alt="">
                <div class="card-body">
                    <a href="/en-parler/" class="btn btn-primary btn-sm">En parler</a>
                    <p class="card-text">Tu n’oses pas en parler à tes proches ? Tu as peur d’être jugée ? Tu ne te sens pas comprise ? Tu ne sais pas encore comment aborder le sujet ? On peut t’apporter quelques conseils pour libérer ta parole.</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-6">
            <div class="card card-summary border-0">
                <img class="card-img" src="{{ "/assets/images/protections_hygieniques_homepage.png" | relative_url }}" alt="">
                <div class="card-body">
                    <a href="/kit-de-survie/" class="btn btn-primary btn-sm">kit-de-survie</a>
                    <p class="card-text">Tu ne sais pas à qui t’adresser ? Tu ne sais pas si ta famille pourra t’aider ? Tu ne sais pas si des professionnels de santé peuvent t’aider ? On peut t’aider à chercher des personnes pour t’aider.</p>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-6">
            <div class="card card-summary border-0">
                <img class="card-img" src="{{ "/assets/images/soutien_homepage.png" | relative_url }}" alt="">
                <div class="card-body">
                    <a href="/comment-soutenir/" class="btn btn-secondary btn-sm">Comment soutenir ?</a>
                    <p class="card-text">Une de tes proches est atteinte d’endométriose ? Tu as des suspicions concernant la santé d’une de tes proches ? Tu te questionnes sur ton rôle dans cette situation ? On peut t’aider à aborder le sujet.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row d-flex flex-column align-items-center">
        <div class="col-12 col-lg-8">
            <h2 class="heading-title text-center mb-4">Tu n'es pas <span>toute seule !</span></h2>
            <p class="subheading-title text-center mb-5">Elles te parlent de leur parcours</p>
            <p class="lead">En effet, l’endométriose touche 1 femme sur 10. Il y de nombreuses formes d’endométriose et ne t’en fais pas elles ne sont pas toute grave. Nous avons réunnis de nombreux temoignages de différents parcours pour que tu comprennes que chaque parcours est unique.</p>
        </div>
    </div>
    {% include accordion.html %}
    {% include testimonials-endogirls.html %}
</div>