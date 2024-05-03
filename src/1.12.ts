{
  // Nullable types
  const seachName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("no searching");
    }
  };
  seachName(null);

  //
}
