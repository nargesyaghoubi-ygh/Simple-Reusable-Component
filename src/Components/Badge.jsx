export default function Badge({ name, course, grade }) {
  return (
   <div className="badge">
        <p><b>{name}</b> completed the <b> {course} </b> course with a grade of <b>{grade}</b>.</p>
   </div>

  );
}
