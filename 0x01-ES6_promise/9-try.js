export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction(), 'Guardrail was processed');
    return queue;
  } catch (err) {
    queue.push(`Error: ${err.message}`, 'Guardrail was processed');
    return queue;
  }
}
