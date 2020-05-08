<section class="page-section page-section--pink" id="honoursawards">
  <div class="container">
    <h4 class="text-center mb-5">HONORS &amp; AWARDS</h4>
    <div class="row">
      <div class="col-4">
          <h1 class="text-center">
            <i class="fa fa-trophy fa-2x"></i>
          </h1>
          <p class="text-center">
            <strong>MAJOR TROPIES</strong>
          </p>
      </div>
      <div class="col-4">
          <h1 class="text-center">
            <i class="fa fa-star-o fa-2x"></i>
          </h1>
          <p class="text-center">
            <strong>HONORS &amp; ACHIEVENMENTS</strong>
          </p>
      </div>
      <div class="col-4">
          <h1 class="text-center">
            <i class="fa fa-graduation-cap fa-2x"></i>
          </h1>
          <p class="text-center">
            <strong>EDUCATIONS</strong>
          </p>
      </div>
    </div>
  </div>
</section>
<section class="page-section timeline">
  <div class="container timeline-entries">
    {% for timeline in site.data.timelines %}
      <div class="entry">
        <div class="title">
            {{timeline.name}}
        </div>
        <div class="body">
          <p>{{timeline.desc}}</p>
        </div>
      </div>
    {% endfor %}
  </div>
</section>