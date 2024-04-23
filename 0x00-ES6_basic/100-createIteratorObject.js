export default function createIteratorObject(report) {
  const list = [];
  for (const el of Object.values(report.allEmployees)) {
    list.push(...el);
  }
  return (list);
}
