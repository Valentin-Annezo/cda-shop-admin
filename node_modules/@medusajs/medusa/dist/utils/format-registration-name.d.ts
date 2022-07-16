/**
 * Formats a filename into the correct container resolution name.
 * Names are camelCase formatted and namespaced by the folder i.e:
 * models/example-person -> examplePersonModel
 * @param path - the full path of the file
 * @return the formatted name
 */
declare function formatRegistrationName(path: string): string;
export default formatRegistrationName;
