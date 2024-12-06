
let assertions = [
  {
    op: "equals",
    path: "path.in.md",
    args: ["value"],
    ok: true,
    severity: "ok",
    details: "Does the specified metadata field equal 'value'",
  },
  {
    op: "contains",
    path: "path.in.other",
    args: [{foo: 1}],
    ok: false,
    severity: "warn",
    details: "Does the path contain the object",
  }
];

console.log(JSON.stringify(assertions));
