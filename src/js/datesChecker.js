const checkDates = () => {
  const events = document.querySelectorAll('.schedule-event') || [];
  const dateNow = new Date();

  events.forEach(event => {
    const date = new Date(+event.dataset.date || 0);
    if (date.getTime() < dateNow.getTime() + 1000*60*180) { // 3 hours left
      event.classList.add('schedule-event-past')
    }
  });
};

export default checkDates;