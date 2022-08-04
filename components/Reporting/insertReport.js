export default function insertIntoReport(
  socket,
  reporter,
  profile,
  reason,
  reportType,
  additional = null
) {
  socket.emit(
    "Insert to report",
    reporter,
    profile,
    reason,
    reportType,
    additional,
    (status) => {
      if (status) {
        alert("użytkownik został poprawnie zgłoszony");
      } else {
        alert("wystąpił błąd, spróbuj ponownie");
      }
    }
  );
}
