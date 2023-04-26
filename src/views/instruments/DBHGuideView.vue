<script lang="ts">
import "@/assets/op_block.css"
export default {}
</script>

<template>
    <div class="midle" style="min-width: 80%;">
        <div class="e">
            <div class="msg">
                <div class="title">FAQ</div>
                <div class="description">
                    <ul class="list">
                        <li>What is it? DBH is an powerfull lib for fast creating a lot of methods for MongoDB</li>
                    </ul>
                </div>
            </div>
            <div class="space"></div>
            <div class="msg">
                <div class="title">Integrating to project</div>
                <div class="description">
                    At first, you need to <a class="link" href="https://github.com/happy-mama/DBH">download</a> it from my
                    GitHub.<br>
                    Next step is to fill <p class="special">config.json</p> with your MongoDB data.<br><br>
                    Put this code into start of your project:<br>
                    <pre><code class="language-javascript">const DBH = require("path to DBH.js");

DBH.init().then(() => {
    // do something
})
</code></pre>
                    Now you can edit <p class="special">gen.js</p>
                </div>
            </div>
            <div class="space"></div>
            <div class="msg">
                <div class="title">config.json</div>
                <div class="description">
                    DO NOT CHANGE <p class="special">gen</p> PROPERTIES, it's a lib properties.
                    <br>
                    <ul class="list">
                        <li>
                            <p class="special">debug</p> - Boolean: console log more info about created templates
                        </li>
                        <li>
                            <p class="special">initClearMemory</p> - Boolean: clear all useless data from lib after init
                            method
                        </li>
                        <li>
                            <p class="special">DB</p> - Object:
                            <ul class="list">
                                <li>
                                    <p class="special">user</p> - string: MongoDB username
                                </li>
                                <li>
                                    <p class="special">password</p> - string: MongoDB password
                                </li>
                                <li>
                                    <p class="special">host</p> - string: MongoDB url to the server
                                </li>
                                <li>
                                    <p class="special">database</p> - string: MongoDB database name
                                </li>
                            </ul>
                        </li>
                        <li>
                            <p class="special">JWTS</p> - string: JWT string to decode/encode data, you can generate it
                            <RouterLink class="link" to="/instruments/passgen">here</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="space"></div>
            <div class="msg">
                <div class="title">Props guide</div>
                <div class="description">
                    <div class="op-block">
                        <input id="togle_0" type="radio" class="op-togle" name="togle">
                        <label for="togle_0">root prop data</label>
                        <section>
                            <div class="content">
                                <table class="DBH">
                                    <tr>
                                        <th class="first">property</th>
                                        <th>type</th>
                                        <th>required</th>
                                        <th>description</th>
                                    </tr>
                                    <tr>
                                        <td class="first">name</td>
                                        <td>string</td>
                                        <td>true</td>
                                        <td>name of the prop, used to get prop data or call methods</td>
                                    </tr>
                                    <tr>

                                    </tr>
                                </table>
                            </div>
                        </section>
                    </div>
                    <div class="op-block">
                        <input id="togle_1" type="radio" class="op-togle" name="togle">
                        <label for="togle_1">cache</label>
                        <section>
                            <div class="content">
                                <table class="DBH">
                                    <tr>
                                        <th class="first">property</th>
                                        <th>type</th>
                                        <th>required</th>
                                        <th>description</th>
                                    </tr>
                                    <tr>
                                        <td class="first">use</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>turns cache system on</td>
                                    </tr>
                                    <tr>
                                        <td class="first">identification</td>
                                        <td>string</td>
                                        <td>true</td>
                                        <td>a value from DB object to be used as a key to save cache data</td>
                                    </tr>
                                    <tr>
                                        <td class="first">time</td>
                                        <td>number</td>
                                        <td>true</td>
                                        <td>time in ms to automaticly clear cache</td>
                                    </tr>
                                    <tr>
                                        <td class="first">log</td>
                                        <td>boolean</td>
                                        <td>false</td>
                                        <td>console logs when clearing cache</td>
                                    </tr>
                                </table>
                            </div>
                        </section>
                    </div>
                    <div class="op-block">
                        <input id="togle_2" type="radio" class="op-togle" name="togle">
                        <label for="togle_2">JWT</label>
                        <section>
                            <div class="content">
                                <table class="DBH">
                                    <tr>
                                        <th class="first">property</th>
                                        <th>type</th>
                                        <th>required</th>
                                        <th>description</th>
                                    </tr>
                                    <tr>
                                        <td class="first">use</td>
                                        <td>boolean</td>
                                        <td>true</td>
                                        <td>turns JWT for this prop on</td>
                                    </tr>
                                    <tr>
                                        <td class="first">string</td>
                                        <td>string</td>
                                        <td>true</td>
                                        <td>JWT string that used to decode/encode data</td>
                                    </tr>
                                    <tr>
                                        <td class="first">time</td>
                                        <td>nubmer</td>
                                        <td>true</td>
                                        <td>time in ms when JWT will expire, 7 days is optimal value</td>
                                    </tr>
                                </table>
                            </div>
                        </section>
                    </div>
                    <div class="op-block">
                        <input id="togle_3" type="radio" class="op-togle" name="togle">
                        <label for="togle_3">DB</label>
                        <section>
                            <div class="content">
                                <table class="DBH">
                                    <tr>
                                        <th class="first">property</th>
                                        <th>type</th>
                                        <th>required</th>
                                        <th>description</th>
                                    </tr>
                                    <tr>
                                        <td class="first">name</td>
                                        <td>string</td>
                                        <td>true</td>
                                        <td>MongoDB collection name</td>
                                    </tr>
                                    <tr>
                                        <td class="first">schema</td>
                                        <td>object</td>
                                        <td>true</td>
                                        <td>stores MongoDB schema data</td>
                                    </tr>
                                </table><br>
                                DB.schema:
                                <ul class="list">
                                    <li>
                                        <p class="special">data</p> - Object: stores ANY values like `name: "string", age:
                                        "number"` that will convert to MongoDB Schema
                                    </li>
                                    <li>
                                        <p class="special">params</p> - Object: stores MongoDB schema params, see info in
                                        mongoose schema params guides
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div class="op-block">
                        <input id="togle_4" type="radio" class="op-togle" name="togle">
                        <label for="togle_4">format</label>
                        <section>
                            <div class="content">
                                <pre><code class="language-javascript">NAME: {
    type: TYPE
    params: {
        PARAMS
    },
    errors: {
        ERRORS
    }
}</code></pre>
                                <ul class="list">
                                    <li><p class="special">NAME</p> - string: name of the method</li>
                                    <li><p class="special">TYPE</p> - string: type of the method, full list in the <p class="special">config.json</p></li>
                                    <li><p class="special">PARAMS</p> - any: params for this method, see prop TYPE and avalable params in <p class="special">config.json</p></li>
                                    <li><p class="special">ERRORS</p> - any: set custom errors names for method, see prop TYPE and avalable errors in <p class="special">config.json</p></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>