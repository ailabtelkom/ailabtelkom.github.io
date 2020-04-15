const loadDataResearch = async () =>
  await $.getJSON("/data/research.json", res => {
    //   console.log(res.data);
    res.data.map((item, key) => {
      return $("#research-datatable > tbody").append(`<tr>
     <td>${item.year}</td>
     <td>${item.title}</td>
     <td>${item.author}</td>
     <td>${item.publisher}</td>
     <td><a target="_blank" href="${item.url}">Link</td>
   </tr>`);
    });
    $(document).ready(function() {
      $("#research-datatable").DataTable({
        order: [[ 0, 'desc' ]]
      });
    });
  });
const loadDataAchievement = async () =>
  await $.getJSON("/data/achievement.json", res => {
    //   console.log(res.data);
    res.data.map((item, key) => {
      return $("#achievement-datatable > tbody").append(`<tr>
     <td>${item.event}</td>
     <td>${item.participant}</td>
   </tr>`);
    });
    $(document).ready(function() {
      $("#achievement-datatable").DataTable();
    });
  });
